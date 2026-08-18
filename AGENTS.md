# Guidelines for Agents

## Core Principles

- **Do NOT maintain backward compatibility** unless explicitly requested. Break things boldly.

## Tech stack in use

- Package manager: [pnpm](https://pnpm.io/)
- Test runner: [Vitest](https://vitest.dev/)

## Commands

- Use the toolchain commands defined in [mise.toml](./mise.toml) for all local command execution.

```shell
# Check files in the repository
mise tasks run check

# Fix files in the repository
mise tasks run fix

# Run tests
pnpm test
```

## Project Structure

- The `src/` structure follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design) methodology.

## Linting and formatting

- After making code changes, run `pnpm exec oxlint --fix`, then run `pnpm exec oxfmt`.
- Before finishing, run `pnpm exec oxlint --deny-warnings --format=agent`.
