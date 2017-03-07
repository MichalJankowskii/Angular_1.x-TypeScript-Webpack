import ComponentA from './componentA.component';
import * as angular from 'angular';

angular.module("App.ComponentA", []).component("componentA", new ComponentA())