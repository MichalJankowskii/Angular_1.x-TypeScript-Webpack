import SettingsService from '../../../shared/services/settings/settingsService';
export class MenuService {
    constructor(private settings: SettingsService) {
    }
    public getMenuItems(): Object[] {
        return this.settings.menu;
    }
}
