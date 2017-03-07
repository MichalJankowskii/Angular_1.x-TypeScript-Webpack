import {State }from "StateDecorator"; 

@State( {
    name: "home", 
    component: "home", 
    url: "/"
})
export default class HomeComponent implements ng.IComponentOptions {
        public template:string; 

        constructor() {
            this.template = require("./home.tpl.html"); 
        }
}