import { MenuService } from './menu/menuService';
import SettingsService from './settings/settingsService';
import './menu/menuService';

import * as angular from 'angular';

angular.module("App.Services", [])
    .service("settingsService", SettingsService)
    .service("menuService", ["settingsService", MenuService])