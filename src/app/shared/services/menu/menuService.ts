import {Service, Inject } from "angular1_typescript_decorators/Decorators";
import Setting from "../settings/settingsService";

export class MenuService {
    constructor(private settings: Setting) {
    }
    public getMenuItems(): Object[] {
        return this.settings.menu;
    }
}
