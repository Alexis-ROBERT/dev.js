import { IsNotProjectType } from '../../dev-create/sources/create.type';
import CommandLineInterfaceConstructor from '../sources/cli.constructor';

export default class CreateProject extends CommandLineInterfaceConstructor<IsNotProjectType> {
        public constructor() {
                super('create-project', {
                    type: false
                });
        }
}
