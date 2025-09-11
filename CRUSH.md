# CRUSH.md — Standing Orders

When asked to work in CI, do the following without asking for confirmation:

1) Create and switch to a new branch named `crush/<short-task-slug>`.
2) Implement the requested changes.
3) Run: git add -A && git commit -m "<concise commit message>".
4) Run: git push --set-upstream origin HEAD.
5) Run: gh pr create --fill --base main --title "<short title>" --body "<short body>".

Constraints:
- Never commit changes to main branch
- Non-interactive CI. Do not use any network calls other than `git` and `gh`.
- If the branch already exists, append a numeric suffix (`-2`, `-3`, ...).
- Never modify files matched by `.crushignore` or `.gitignore`.
- Never commit node_modules and other unnecessary depepency related folders.
