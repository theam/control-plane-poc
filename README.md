# Control Plane PoC

A minimal proof-of-concept repository.

## Quick start
- Clone the repo and ensure you have recent versions of Git and Node/Go/Python as needed for your stack.
- Create a new branch for any change: `git switch -c <your-branch>`.
- Keep pull requests small and focused.

## Node server
- Requires Node 18+ (tested with Node 20; see .nvmrc)
- Start the server: `node server.js`
- Configure port via env var: `PORT=8080 node server.js`
- Healthcheck endpoints:
  - GET /health -> `{ "status": "ok" }`
  - GET / -> `{ "status": "ok" }`

## Conventions
- Write clear commit messages focused on the why.
- Keep files and functions short and single-purpose.
- Prefer readability over cleverness.
- Add or update docs when behavior changes.

## PR checklist
- Scope is a single concern.
- Tests or verification steps included (if applicable).
- Lint/typecheck pass locally.
- README or inline docs updated when needed.

## Security
- Never commit secrets. Use environment variables and `.env.example` placeholders.
- Limit third-party dependencies and pin versions.

## Communication
- Link issues (e.g., JIRA) in PR titles/bodies.
- Describe impact and rollout considerations.

## License
Specify your project license here.
