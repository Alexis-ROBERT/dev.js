import CommandLineInterfaceConstructor from './cli.constructor';
import AngularCreateComponent from '../create-component/angular/sources/cli';
import EmberCreateComponent from '../create-component/ember/sources/cli';
import PolymerCreateComponent from '../create-component/polymer/sources/cli';
import ReactCreateComponent from '../create-component/react/sources/cli';
import VueCreateComponent from '../create-component/vue/sources/cli';
import AngularDeleteComponent from '../delete-component/angular/cli';
import EmberDeleteComponent from '../delete-component/ember/cli';
import PolymerDeleteComponent from '../delete-component/polymer/cli';
import ReactDeleteComponent from '../delete-component/react/cli';
import VueDeleteComponent from '../delete-component/vue/cli';
import CreateProject from '../create-project/cli';
import AngularServer from '../server/angular/cli';
import EmberServer from '../server/ember/cli';
import PolymerServer from '../server/polymer/cli';
import ReactServer from '../server/react/cli';
import VueServer from '../server/vue/cli';
import createProjectConfig from '../../dev-create/sources/create.project.config';
import { AllProjectType, IsNotProjectType } from '../../dev-create/sources/create.type';

export default function commandLineInterfaceConfig(): CommandLineInterfaceConstructor<IsNotProjectType | AllProjectType>[] {
        const constructCommand: CommandLineInterfaceConstructor<IsNotProjectType | AllProjectType>[] = [
                /* Create project */
                new CreateProject(),

                /* Create component */
                new AngularCreateComponent(),
                new EmberCreateComponent(),
                new PolymerCreateComponent(),
                new ReactCreateComponent(),
                new VueCreateComponent(),

                /* Delete component */
                new AngularDeleteComponent(),
                new EmberDeleteComponent(),
                new PolymerDeleteComponent(),
                new ReactDeleteComponent(),
                new VueDeleteComponent(),

                /* Server */
                new AngularServer(),
                new EmberServer(),
                new PolymerServer(),
                new ReactServer(),
                new VueServer(),
        ];

        let projectConfig = createProjectConfig().projectType;

        return constructCommand.map<CommandLineInterfaceConstructor<IsNotProjectType | AllProjectType>>((c) => {
                if (typeof projectConfig !== 'boolean') {
                        projectConfig = projectConfig as AllProjectType;

                        if (c.type === undefined) {
                                throw new Error('Hello World') 
                        }

                        switch (projectConfig) {
                                case c.type:
                                        return c;
                        }
                }

                projectConfig = projectConfig as IsNotProjectType;

                if (projectConfig) {
                        return c;
                }
        })
}
