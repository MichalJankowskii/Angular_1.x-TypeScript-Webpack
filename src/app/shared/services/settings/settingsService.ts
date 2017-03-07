import * as angular from "angular";

export default class SettingsService {

    public baseUrl: string = "/";
    public menu: Array<Object> = [
        {
            sref: "home", caption: "Home"
        } ,
        {
            sref: "componentA", caption: "Component A"
        } ,
        {
            sref: "componentB", caption: "Component B"
        } ,
    ];
}