import { AngularType } from "../../../../dev-create/sources/create.type";
import CommandLineInterfaceConstruct from "../../../sources/cli.constructor";

export default class AngularCreateComponent extends CommandLineInterfaceConstruct<AngularType> {
        constructor() {
                super('create-component')
        }
}