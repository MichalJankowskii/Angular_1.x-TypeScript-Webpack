import "./footer.scss";
import * as angular from "angular";
import FooterComponent from "app/components/footer/footer.component";

angular.module("App.Footer", []).component("pageFooter", new FooterComponent())