const cmsData = {
  site_name: 'Control Plane POC',
  hero_title: 'Build, ship, and scale with confidence',
  hero_subtitle: 'A minimal control plane proof-of-concept showcasing integration and automation.',
  features_heading: 'Why teams choose us',
  feature_1_title: 'Simple',
  feature_1_body: 'Straightforward workflows to get you productive fast.',
  feature_2_title: 'Composable',
  feature_2_body: 'Integrate your tools and data sources effortlessly.',
  feature_3_title: 'Scalable',
  feature_3_body: 'Built with growth and reliability in mind.',
  about_heading: 'Built for developers',
  about_body: 'This POC demonstrates a modern, responsive landing with CMS field hooks and a working form, suitable for static hosting or integration into a broader app.',
  form_heading: 'Request early access',
  policy_link_text: 'Privacy'
};

function applyCMS(data) {
  document.querySelectorAll('[data-cms]').forEach(el => {
    const key = el.getAttribute('data-cms');
    if (data[key] != null) {
      if (el.tagName === 'IMG') {
        el.src = data[key];
      } else if (el.tagName === 'A' && key.endsWith('_link')) {
        el.href = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  });
}

function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

ready(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyCMS(cmsData);

  const form = document.getElementById('lead-form');
  const status = document.querySelector('.form-status');

  function setError(name, message) {
    const span = document.querySelector(`[data-error-for="${name}"]`);
    if (span) span.textContent = message || '';
  }

  function validate(formData) {
    let ok = true;
    setError('name', '');
    setError('email', '');

    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();

    if (!name) { setError('name', 'Please enter your name'); ok = false; }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) { setError('email', 'Enter a valid email'); ok = false; }

    return ok;
  }

  async function submitLead(formData) {
    await new Promise(r => setTimeout(r, 600));
    return { ok: true };
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';

    const formData = new FormData(form);
    if (!validate(formData)) return;

    status.textContent = 'Submitting…';
    try {
      const res = await submitLead(formData);
      if (res.ok) {
        status.textContent = 'Thanks! We\'ll be in touch soon.';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again later.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again.';
    }
  });
});
