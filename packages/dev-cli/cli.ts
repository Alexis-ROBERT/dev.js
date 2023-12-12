import CommandLineInterfaceRegister from "./cli.register";
import AngularCreateComponent from "./create-component/angular/cli.create.component";

export default function CommandLineInterface(): void {
        new CommandLineInterfaceRegister([
                new AngularCreateComponent()
        ])
}