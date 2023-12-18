import { VueType } from '../../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../../sources/cli.constructor';

export default class VueCreateComponent extends CommandLineInterfaceConstructor<VueType> {
        public constructor() {
                super('create-component');
        }
}
