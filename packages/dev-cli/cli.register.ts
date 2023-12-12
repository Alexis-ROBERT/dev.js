import { argv } from 'node:process';
import CommandLineInterface from './cli';
import { ICLIInfos, IResultOK } from './cli.type';

/**
 * This class is util for register of commands in terminal process
 */
export default class CommandLineInterfaceRegister<C extends CommandLineInterface> {
        private _commandAccepted: CommandLineInterface[] = [];

        private _cliInfos: ICLIInfos = {
                name: '',
                description: '',
        };

        private _version: number = 0;

        private _renderingInfo;

        private _argv: string[] = argv;

        private _isValidate: boolean = false;

        private _processCommand(cli: CommandLineInterface): Promise<CommandLineInterface> {
                return new Promise<CommandLineInterface>((resolve, reject) => {
                        for (let i = 1; i <= argv.length; i++)
                                switch (argv[i]) {
                                        case cli.name():
                                                cli.ok(true);
                                                break;

                                        case cli.option()[i].name:
                                                if (!cli.isOptionProcess(argv[i])) {
                                                        cli.ok(false);
                                                }

                                                cli.pushOptionForExecute(argv[i]);
                                                break;
                                }

                        if (typeof cli.ok() !== 'boolean') {
                                const ok: IResultOK = cli.ok() as IResultOK;

                                if (!ok.isOk) {
                                        reject(ok.reason);
                                        return;
                                }
                        }

                        const ok: boolean = cli.ok() as boolean;

                        if (!ok) {
                                reject(ok);
                                return;
                        }

                        resolve(cli);
                        return;
                });
        }

        private _addValidate(cli: CommandLineInterface): void {
                this._isValidate = cli.cLIValidate(cli);
                this.add(cli);

                delete this._isValidate;
        }

        public constructor(command: CommandLineInterface[] | C[]) {
                if (command instanceof CommandLineInterface) {
                        if (Array.isArray(command)) {
                                command.forEach((c) => {
                                        this._addValidate(c);
                                });
                        }

                        Object.entries(command).forEach((c) => {
                                this._addValidate(c[1]);
                        });

                        let ok: boolean | IResultOK;

                        this._commandAccepted.forEach((c) => {
                                if (typeof ok !== 'boolean') {
                                        const isOK = ok as IResultOK;
                                        if (isOK.isOk) return this;
                                }

                                const isOk = ok as boolean;
                                if (isOk) return this;

                                this._processCommand(c)
                                        .then((l) => {
                                                ok = c.ok(true);
                                                l.exec(l.call);
                                        })
                                        .catch((reason) => {
                                                ok = c.ok(false, reason);
                                        });
                        });

                        return this;
                }
        }

        public nameCLI(name: string, description: string): void {
                this._cliInfos.name = name;
                this._cliInfos.description = description;
        }

        public version(version: number): void {
                this._version = version;
        }

        public add(cli: CommandLineInterface): this {
                this._commandAccepted.forEach((c, i, a) => {
                        if (!this._isValidate) {
                                if (!c.cLIValidate(cli)) throw new Error('ssss');
                        }

                        if (cli.name() === c.name()) {
                                delete a[i];
                                a[i] = cli;

                                return;
                        }

                        a.push(cli);
                });

                return this;
        }

        public delete(name: string | CommandLineInterface): this {
                const deleteCommand = (name: string, value: string, index: number, array: CommandLineInterface[]): boolean => {
                        if (name === value) {
                                array.slice(index, 1);
                                return true;
                        }

                        return false;
                };

                const commandSearch = (name: string): void => {
                        this._commandAccepted.forEach((c, i, a) => {
                                if (!deleteCommand(name, c.name(), i, a)) {
                                        throw new Error('Hello World');
                                }
                        });
                };

                if (name instanceof CommandLineInterface) {
                        commandSearch(name.name());
                        return this;
                }

                commandSearch(name);
        }

        public help(): void {}
}
