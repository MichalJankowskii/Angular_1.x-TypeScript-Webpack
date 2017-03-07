import {State }from "StateDecorator"; 

@State( {
    name: "componentB", 
    component: "componentB", 
    url: "/componentB"
})
export default class ComponentB implements ng.IComponentOptions {
        public template:string; 

        constructor() {
            this.template = require("./componentB.tpl.html"); 
        }
}