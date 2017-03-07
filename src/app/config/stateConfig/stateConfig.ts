import {StatesBootstraper} from "StateDecorator";

export function provideState($stateProvider: any, $urlRouterProvider: any, $locationProvider: any): void {
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
  StatesBootstraper.getInstance().registerStates($stateProvider);
}
provideState.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
