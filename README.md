# Coding Assignment 13

## Steps for the assignment

1. Configure ESLint.

    `npm install eslint --save-dev`
    `npm init @eslint/config`

2. Configure Prettier.

    `npm install --save-dev --save-exact prettier`

    * `--save-exact` ensures that everyone will install the same version.
    * Create .prettierrc.json file that contains basic rules about formatting the code.

    `npm install --save-dev eslint-config-prettier`
    * allows both ESLint and Prettier to run without stylistic conflicts.
    * Add Prettier in eslint.config.mjs file.

3. Add lint and format as scripts in package.json.

    `"lint": "eslint . --fix --max-warnings=0"`
    * runs eslint from the root folder and auto fix error and checks that we don't have any warning.

    `"format": "prettier . --write"`
    * runs prettier from the root folder and auto fix format errors.

4. Configure Husky with lint-staged.
    `npx mrm@2 lint-staged`
    * creates a configuration in package.json file for linting staged files.
    * creates /.husky which contains pre-commit hook to run lint-staged.
    * customized the lint-staged script to run "npm run lint" and "npm run format".


## How to run the web React app

1. Open a local terminal.

2. Pull the image from docker:

    `docker pull elacodes1/teodocio_aena_coding_assignment13`

3. Run the image:

    `docker run -p 8018:80 elacodes1/teodocio_aena_coding_assignment13`

4. In a local browser, head to `http://localhost:8018/`


## How to run Storybook

1. In addition to the steps above, run this command:

    `npm run storybook`
    * make sure you're running the command in the correct folder location.


## Folder Structure

**/.storybook** - contains configuration settings and dependencies needed for running storybook locally.

**/dist** - contains /cjs and /esm directories. Each directory refers to the compiled module system. CJS (CommonJS) and ESM (EcmaScript) modules allow the transpiled JavaScript code from my application to be compatible with various environments.

**/public** - contains static files that are served in the front-end.

**/src** - contains /components folder which houses all the .types, .test, and .stories code for each component.

***.config.js** files contain configuration code specific to that tool. For example, babel.config.js contains the module exports required for its presets.

