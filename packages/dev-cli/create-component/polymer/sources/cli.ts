import { PolymerType } from '../../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../../sources/cli.constructor';

export default class PolymerCreateComponent extends CommandLineInterfaceConstructor<PolymerType> {
        public constructor() {
                super('create-component');
        }
}
