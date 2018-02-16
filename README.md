This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup project
Install latest Node.js version 6
https://nodejs.org/en/download/

Check that npm is installed as part of node.js
Install yarn package managers globally in your system:
```
npm install yarn -g
```
Install webpack global:
```
npm install webpack -g
```
Clone this project and run `yarn install` from project root folder.
## Used libraries
React, Typescript, Material-ui (http://www.material-ui.com/v0.18.5/#/components/select-field)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts
```
npm start
```
Runs the app using your local Node.js server.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

```
npm test
```
Launches the test runner in the interactive watch mode.<br>
```
npm run coverage
```
Run code coverage report.<br>
```
npm run build
```
Builds the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.<br>
```
npm run devstart
```
Runs the app in the development mode using webpack devserver (in-memory node.js).<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```
npm run api
```
Runs small json server on port 3004 with mocked service api.
json-server --watch mock/api.js --routes mock/routes.json --port 3004
