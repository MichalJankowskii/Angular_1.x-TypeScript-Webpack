import * as angular from "angular";
import { ISettingsService } from "app/interfaces/services/ISettingsService";

export default class SettingsService implements ISettingsService {

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