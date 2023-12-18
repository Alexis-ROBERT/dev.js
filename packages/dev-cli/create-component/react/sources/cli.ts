import { ReactType } from '../../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../../sources/cli.constructor';

export default class ReactCreateComponent extends CommandLineInterfaceConstructor<ReactType> {
        public constructor() {
                super('create-component');
        }
}
