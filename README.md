# npm-workspaces sandbox

This is a sandbox project to test npm workspaces.

## Setup
```json
  "private": true,
  "workspaces": [
    "apps/*",
    "libs/*"
  ],
```

## install
```bash
npm install --workspaces
```


## Commands
```bash
npm run dev --workspaces [app-name]
```