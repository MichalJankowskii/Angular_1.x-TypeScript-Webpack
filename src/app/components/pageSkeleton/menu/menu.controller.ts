import SettingsService from "app/shared/services/settings/settingsService";
import { MenuService } from "./service/menuService";

export default class MenuController {
    public menuItems: any[] ;

    constructor(settingsService: SettingsService) {
        this.menuItems = new MenuService(settingsService).getMenuItems();
    }
}
