/// <EXTERNAL REFERENCES>
/// <reference path="./node_modules/ts-framework/typings/tsd.d.ts" />

/// <CORE IMPORTS>
import {ApplicationFactory, FactoryConfig} from "ts-framework/build/ApplicationFactory";

/// <MODEL + CONTROLLER IMPORTS>
import * as Controllers from "./app/controllers";

// Set up the root directory
const __ROOT_DIR__ = require('path').join(__dirname, '.');

// Create a new application
var app = ApplicationFactory.create(__ROOT_DIR__, new FactoryConfig("/app.json"));

app.configure(() => {
    // default routes
    app.router.map('/', { controller: 'Home', action: 'index' });
    app.router.map('/:controller/:action?/:id?', { action: 'index' });

    // REST routes
    app.router.get('/:controller/:id?', { action: 'find' });
    app.router.post('/:controller', { action: 'create' });
    app.router.put('/:controller/:id', { action: 'update' });
    app.router.delete('/:controller/:id', { action: 'destroy' });
});
app.addControllers(Controllers);
app.start();