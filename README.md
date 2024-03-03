# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Jon Documentation

- If you get this project from Git (Github, Gitlab, etc...), you must "npm install" first in yout project
- After that, you can run this project with code "npm run dev" in your terminal

## System Requerement

- Node JS 20.x.x

## Sintak run test

- For run test any file.test:
  - $ npx vitest --run NameFile.test.js
- For run all file test with exptension NameFile.test and test Watch Mode:
  - $ npx vitest
- For run this test to check all file test has coverage ot uncoverage, you can use this code in terminal:
  - $ npx vitest --run --coverage
  - or
  - $ npx vitest --run --coverage NameFile.test
  - But, if you want to use test coverage, you must install dependency istanbul first, and add configuration in file "vitest.config.js" with code "coverage: {provider: 'istanbul'}". Because, this dependecy is compatibel with vitest
- Vitest UI
  - For documentation about vitest-iu, visit this link: https://vitest.dev/guide/ui
  - To run vitest-ui, yout can use this code:
    - npm vitest --ui
