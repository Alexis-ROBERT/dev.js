import { ReactType } from "../../../dev-create/sources/create.type";
import CommandLineInterfaceConstructor from "../../sources/cli.constructor";

export default class ReactServer extends CommandLineInterfaceConstructor<ReactType> {
        public constructor() {
                super('server');
        }
}