import CommandLineInterfaceConstructor from "./cli.constructor";
import AngularCreateComponent from "../create-component/angular/sources/cli";
import EmberCreateComponent from "../create-component/ember/sources/cli";
import PolymerCreateComponent from "../create-component/polymer/sources/cli";
import ReactCreateComponent from "../create-component/react/sources/cli";
import VueCreateComponent from "../create-component/vue/sources/cli";

export default function commandLineInterfaceConfig(): CommandLineInterfaceConstructor[] {
        const constructCommand: CommandLineInterfaceConstructor[] = [
                /* Create component */
                new AngularCreateComponent(),
                new EmberCreateComponent(),
                new PolymerCreateComponent(),
                new ReactCreateComponent(),
                new VueCreateComponent(),

                /* Delete Component */
        ]

        return constructCommand.map<CommandLineInterfaceConstructor>((c) => {
                return c;
        });
}