import commandLineInterfaceConfig from './cli.config';
import CommandLineInterfaceRegister from './cli.register';
import AngularCreateComponent from '../create-component/angular/sources/cli';

export default function commandLineInterface(): void {
        new CommandLineInterfaceRegister([...commandLineInterfaceConfig()]);
}