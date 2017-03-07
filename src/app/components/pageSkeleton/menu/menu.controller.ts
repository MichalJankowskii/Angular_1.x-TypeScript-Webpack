import { MenuService } from './service/menuService';
import SettingsService from "app/shared/services/settings/settingsService";

export default class MenuController {
    public menuItems : Array<any> ; 
    
    constructor(settingsService : SettingsService) {
        this.menuItems = new MenuService(settingsService).getMenuItems(); 
    }
}