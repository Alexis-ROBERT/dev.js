import { AngularType } from "../../../dev-create/sources/create.type";
import CommandLineInterfaceConstructor from "../../sources/cli.constructor";

export default class AngularDeleteComponent extends CommandLineInterfaceConstructor<AngularType> {
        public constructor() {
                super('delete-component')
        }
}