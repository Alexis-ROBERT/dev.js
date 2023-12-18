import { ReactType } from '../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../sources/cli.constructor';

export default class ReactDeleteComponent extends CommandLineInterfaceConstructor<ReactType> {
        public constructor() {
                super('delete-component');
        }
}
