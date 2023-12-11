import CommandLineInterface from "./cli";

export interface IOptionContruct {
        name: string;

        description?: string;

        action?: (cli: CommandLineInterface) => any;
}

export interface IResultOK {
        reason?: string;

        isOk: boolean;
}

export interface ICLIInfos {
        name: string;

        description?: string;
}