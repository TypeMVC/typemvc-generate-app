import {Controller} from "ts-framework/build/Controller";

export class HomeController extends Controller
{
    index()
    {
        // this.view('index', { layout: 'layout' });
        this.content("Hello World");
    }

}