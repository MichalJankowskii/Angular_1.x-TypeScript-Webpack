import {MenuService } from '../../shared/services/menu/menuService'; 

export default class MenuController {
    public menuItems : Array<any> ; 
    
    constructor(menuService : MenuService) {
        this.menuItems = menuService.getMenuItems(); 
    }
}