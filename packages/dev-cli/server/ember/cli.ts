import { EmberType } from '../../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../../sources/cli.constructor';

export default class EmberServer extends CommandLineInterfaceConstructor<EmberType> {
        public constructor() {
                super('server');
        }
}
