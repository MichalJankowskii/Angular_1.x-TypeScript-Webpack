import { MenuService } from '../../shared/services/menu/menuService';
import MenuController from './menu.controller';

export default class MenuComponent implements ng.IComponentOptions{
        public template:string;
        public controller: any;

        constructor(menuService: MenuService) {
            this.template =  require("./menu.tpl.html");
            this.controller = new MenuController(menuService);
        }
}