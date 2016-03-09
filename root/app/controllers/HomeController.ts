/// <reference path="../../app.ts" />

class HomeController extends TS.Controller {

    index() {
        this.view('index', { layout: 'layout' });
    }

}