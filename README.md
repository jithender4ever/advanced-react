##Project Structure
```bash
/lib
    /server.js  --> entry point of the app
    /components --> React code
/public         --> Static content
```

##Configuring the project
```
1. Initialize yarn, so all the package dependencies can be installed.
2. Install and configure eslint `yarn add --dev eslint` && `yarn eslint --init`.
3. Install eslint react and babel plugins. `yarn add --dev eslint-plugin-react` && `babel-eslint`.
```

###Configuring the server
```bash
1. Install express and ejs packages
2. Install nodemon to be able to start a babel-node and watch for changes.
3. Configure babel by adding "babel" key to package.json file.
   We do this, so we can use imports and exports as opposed to require. 
   Note: 'node' by default does not support module imports and exports.   
```

###Configuring client
```bash
1. Edit the index.ejs file to add a script tag and set the src to bundle.js, so it loads our react code.
2. Configure webpack to package the application into a single bundle.js file. Note: Can grab a config file from the webpack.js.org and edit as needed.
3. To generate bundle.js, we need to add a webpack command to package.json file.
   'webacpk -wd' --> w for watch; d for development mode.
   **Make sure to exclude node_modules when generating bundle.js file.
4. Need to add babel-polyfill as well to be able to use async await feature.
```

###Configuring test framework
```bash
1. Setup jest as the test framework.
2. Create tests inside a folder named __tests__. Jest will look for tests in this folder automatically. 
```

####Other Best Practices
```
1. Added server side rendering.

```
