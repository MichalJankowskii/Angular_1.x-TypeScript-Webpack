import { State } from '../../../StateDecorator';
@State({
    name: "error",
    url: "/err",
    component: "error",
})
export default class ErrorComponent implements ng.IComponentOptions {
    public template: string;
    constructor() {
        this.template = require("./error.tpl.html");
    }
}