# Base web admin template

## Prerequisite

- VS Code's extensions:
  - EditorConfig
  - TODO Highlight
  - ESLint
  - Code Spell Checker

- Yarn: <https://yarnpkg.com/>

## Note

- Use `yarn` instead of `npm`.
- Don't forget to commit `yarn.lock` when you are adding new packages.

## How to Start

- Create `.env.development.local` from `.env.development` with your own modifications:

```sh
cp .env.development{,.local}
```

- Install app dependencies:

```sh
yarn install
```

- Install Husky:

```sh
yarn prepare
```

- Start the development server:

```sh
yarn dev
```

## Project Structure

- `pages`: Next.js pages
  - `api`: API Routes
- `public`: Public assets
- `styles`: Styling files
- `src`: Main directory for source code
  - `components`:
    - `common`: Small components: Buttons, Icons, Input...
    - `widgets`: Larger components: Banner, Pagination, Modals...
    - `screens`: Screen component (largest components which are used directly from `pages`)
    - `layouts`: Components related to layout
    - Others are waiting for refactoring
  - `config`: Put global config files
  - `hooks`: Global custom React hooks
  - `models`: Helpers
  - `utils`: Utilities functions

## Other commands

- `yarn prepare`: Install Husky.
- `yarn ts-check`: Validate types of TypeScript files.
- `yarn lint`: Report linting issues for TypeScript files.
- `yarn lint-style`: Report linting issues for SASS files.
- `yarn prettier --config .prettierrc 'src/**/*.{ts,tsx}' --write`: Format code on `src` directory.
- `yarn prettier --config .prettierrc 'pages/**/*.{ts,tsx}' --write`: Format code on `pages` directory.

## Use with Docker

TBD...
