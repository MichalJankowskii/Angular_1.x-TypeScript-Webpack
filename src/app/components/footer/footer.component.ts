export default class FooterComponent implements ng.IComponentOptions{
        public template:string;
        public bindings:any;

        constructor() {
            this.template =  require("./footer.tpl.html");
        }
}