## Supabase, TypeScript, Vue.js App

Project Overview

This project is a full-stack application built with Supabase for backend services, TypeScript for type safety, and Vue.js for the frontend. End to End Testing with Cypress and unit testing with vitest.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Prerequisites

    1. Node.js and npm (or yarn)
    2. A Supabase account
    3. A code editor or IDE
    4. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Clone github repository

Navigate to a directory where you want the repository to be copied and open Terminal or Command Prompt

```sh
git clone https://github.com/ercrvr/typescript-supabase
```

Go to the projects root

```sh
cd typescript-supabase
```

## .env variable setup

Create a .env file by running this command.
```sh
echo VITE_SUPABASE_URL= >> .env
echo VITE_SUPABASE_ANON_KEY= >> .env
echo VITE_STUDENT_ENDPOINT= >> .env
```

Open the project with your code editor:
For VSCode:
```sh
code .
```

Update .env with the correct credentials that were sent to you separately.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)
**Note** If it's your first time running cypress on your machine, you need to install prerequisite packages before running this command.
[Linux Prerequisites](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites)
```sh
npm run test:e2e:dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
