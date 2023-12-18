import { AngularType } from '../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../sources/cli.constructor';

export default class AngularServer extends CommandLineInterfaceConstructor<AngularType> {
        public constructor() {
                super('server');
        }
}
