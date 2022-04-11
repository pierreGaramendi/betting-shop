# BettingShop an app to make bets easily

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You need to install Yarn 1.22.18 version to run this project.

All progress is in the "develop" branch. You should switch to that branch if you want to see the progress.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technology Decisions 

###Yarn over Npm
They both are great package manager. Yarn can fetch and install packages in parallel and also its adoption by developers is growing exponentially. But in the end they are also the same so it is also a matter of preference and teste.

###Why Axios 
Axios provides an easier to use syntax in a compact package. It has good error handling or HTTP intercepts and would be helpful if needed in the future.

###Why Moudles Css
CSS Modules can solve errors like conflicts from identical class names and all the project. They allow us to use the same class name in multiple files without selector and rule errors by scoping class names locally by default.

###Why React Redux / Redux Toolkit
Redux is a well known library for state magament, framework agnostic, a lot of documentation. Redux Toolkit is the go-to way to use Redux. It simplifies the store setup, reduces the required boilerplate, and follows the best practices by default.

###Directory Structure
Following the design principle separating of concerns, the different parts of the project were separated into folders. You have a folder for components for the different parts of the application and avoid complexity in the code. Services folder for http requests. Interfaces for interfaces and strongly typing the event list. Redux folder for the files that create the store and the slice as a reducer.