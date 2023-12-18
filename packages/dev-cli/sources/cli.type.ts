import CommandLineInterfaceConstructor from "./cli.constructor";
import CommandLineInterface from "./cli.constructor";

export interface IOptionContruct<C extends CommandLineInterfaceConstructor> {
        name: string;

        description?: string;

        action?: (cli: C) => any;
}

export interface IResultOK {
        reason?: string;

        isOk: boolean;
}

export interface ICLIInfos {
        name: string;

        description?: string;
}

export interface IOptionCLI<T = {}> {
        type: T;
}