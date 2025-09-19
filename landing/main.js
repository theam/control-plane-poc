const API_BASE = (window.env && window.env.API_BASE) || '/api';

async function fetchJSON(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
}

function el(sel, ctx = document) { return ctx.querySelector(sel); }
function elAll(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

function renderEnvItem(env) {
  const tpl = el('#env-item-tpl');
  const node = tpl.content.firstElementChild.cloneNode(true);
  el('.env-name', node).textContent = env.name || env.id;
  el('.env-desc', node).textContent = env.description || '';

  elAll('[data-action]', node).forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.getAttribute('data-action');
      btn.disabled = true;
      try {
        await triggerAction(env.id, action);
        btn.textContent = 'Done';
        setTimeout(() => (btn.textContent = action[0].toUpperCase() + action.slice(1), btn.disabled = false), 1200);
      } catch (e) {
        console.error(e);
        alert(`Failed: ${action} on ${env.id}`);
        btn.disabled = false;
      }
    });
  });

  return node;
}

async function loadEnvironments() {
  const list = el('#env-list');
  list.innerHTML = '<div class="text-secondary">Loading environments…</div>';
  try {
    const data = await fetchJSON('/environments');
    list.innerHTML = '';
    if (!data || !Array.isArray(data) || data.length === 0) {
      list.innerHTML = '<div class="text-secondary">No environments found.</div>';
      return;
    }
    data.forEach(env => list.appendChild(renderEnvItem(env)));
  } catch (e) {
    console.error(e);
    list.innerHTML = '<div class="text-secondary">Error loading environments.</div>';
  }
}

async function triggerAction(envId, action) {
  return fetchJSON(`/environments/${encodeURIComponent(envId)}/actions`, {
    method: 'POST',
    body: JSON.stringify({ action })
  });
}

function wireUI() {
  el('#refresh').addEventListener('click', loadEnvironments);
}

window.addEventListener('DOMContentLoaded', () => {
  wireUI();
  loadEnvironments();
});
