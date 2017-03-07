import {Service } from "angular1_typescript_decorators/Decorators";
import * as angular from "angular";

export default class SettingsService {

    public baseUrl: string = "/";
    public menu: Array<Object> = [
        {
            sref: "home", caption: "Home"
        } ,
        {
            sref: "error({message: 'Example Parameter '})" , caption : "Loading Example"
        }
    ];
}