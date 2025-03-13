# Coding Assignment 13

## Steps in the assignment

1. Add and configure Husky.




## How to run the React app

1. Open a local terminal.

2. Pull the image from docker:

    `docker pull elacodes1/teodocio_aena_coding_assignment12`

3. Run the image:

    `docker run -p 8083:80 elacodes1/teodocio_aena_coding_assignment12`

4. In a local browser, head to `http://localhost:8083/`


## How to run Storybook

1. In addition to the steps above, run this command:

    `npm run storybook`

    *make sure you're running the command in the correct folder location.


## Folder Structure

**/.storybook** - contains configuration settings and dependencies needed for running storybook locally.

**/dist** - contains /cjs and /esm directories. Each directory refers to the compiled module system. CJS (CommonJS) and ESM (EcmaScript) modules allow the transpiled JavaScript code from my application to be compatible with various environments.

**/public** - contains static files that are served in the front-end.

**/src** - contains /components folder which houses all the .types, .test, and .stories code for each component.

***.config.js** files contain configuration code specific to that tool. For example, babel.config.js contains the module exports required for its presets.

