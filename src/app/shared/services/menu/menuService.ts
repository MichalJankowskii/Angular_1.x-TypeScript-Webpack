import {Service, Inject } from "angular1_typescript_decorators/Decorators";
import Setting from "../settings/settingsService";

@Service("App", "menuService")
@Inject("settings")
export class MenuService {
    constructor(private settings: Setting) {
    }
    public getMenuItems(): Object[] {
        return this.settings.menu;
    }
}
