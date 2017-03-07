import SettingsService from './settings/settingsService';

import * as angular from 'angular';

angular.module("App.Services", [])
    .service("settingsService", SettingsService)