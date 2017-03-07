import "./imports/libs";
import "./imports/basic";
import "./imports/styles";
import { appHttpConfig } from "./app/config/httpConfig/httpConfig";
import { provideState } from "./app/config/stateConfig/stateConfig";
import * as angular from "angular";

const externalModulesNames: Array<any> = [
  "ui.router",
  "ui.bootstrap",
  "ngAnimate",
  "ngSanitize",
  "App.Header",
  "App.Footer",
  "App.Home",
  "App.Error",
  "App.Services",
  "App.ComponentA",
  "App.ComponentB",
  "App.TopMenu"
];
var baseModule: angular.IModule = angular.module("App", externalModulesNames);
baseModule.config(provideState);
baseModule.config(appHttpConfig);
angular.bootstrap(document, [baseModule.name]);

