import {State }from "StateDecorator"; 

@State( {
    name: "componentA", 
    component: "componentA", 
    url: "/componentA"
})
export default class ComponentA implements ng.IComponentOptions {
        public template:string; 

        constructor() {
            this.template = require("./componentA.tpl.html"); 
        }
}