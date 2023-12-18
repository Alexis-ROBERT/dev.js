import { PolymerType } from "../../../dev-create/sources/create.type";
import CommandLineInterfaceConstructor from "../../sources/cli.constructor";

export default class PolymerServer extends CommandLineInterfaceConstructor<PolymerType> {
        public constructor() {
                super('server');
        }
}