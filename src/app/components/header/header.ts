import "./header.scss";
import * as angular from "angular";
import HeaderComponent from "app/components/header/header.component";

angular.module("App.Header", []).component("ingHeader", new HeaderComponent())
