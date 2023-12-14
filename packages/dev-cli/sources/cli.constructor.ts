import { IOptionContruct, IResultOK } from './cli.type';

/**
 *
 */
export default class CommandLineInterfaceConstructor {
        private _optionContruct: IOptionContruct[] = [];
        private _optionExec: string[] = [];

        private _ok: boolean = false;
        private _reason: string = '';

        private _stepContruct: any[] = [];

        public constructor(private _name: string) {
                this._ok ?? false;
        }

        public name(): string {
                return this._name;
        }

        public ok(isOk?: boolean, reason?: string): IResultOK | boolean {
                if (isOk === undefined) {
                        if (!this._ok) {
                                return {
                                        isOk: this._ok,
                                        reason: this._reason,
                                };
                        }

                        return this._ok;
                }

                this._ok = isOk;

                if (isOk && !!!reason) {
                        return this._ok;
                }

                this._reason = reason;

                return {
                        isOk: this._ok,
                        reason: this._reason,
                };
        }

        public step(callBack: (cli: this) => any): this {
                this._stepContruct.push(callBack);
                return this;
        }

        public call(): any | any[] {
                this._stepContruct.forEach((step) => {
                        step(this);
                })
        }

        public pushOptionForExecute(name: string): this {
                this._optionExec.push(name);
                return this;
        }

        public cLIValidate(cli: CommandLineInterfaceConstructor): boolean {
            if (!RegExp(/^[a-zA-Z0-9_-]+$/).test(cli.name())) {
                    return false;
            }

            return true;
    }

        public exec(callBack?: (cli: this) => any): void {
                if (this._ok) {
                        callBack(this);

                        this._optionExec.forEach((e) =>
                                this._optionContruct.forEach((o) => {
                                        if (e === o.name) o.action(this);
                                })
                        );
                }
        }

        public isOptionProcess(name: string): boolean {
                for (let i = 0; i <= this._optionContruct.length; i++) {
                        if (name !== this._optionContruct[i].name) continue;
                        return true;
                }

                return false;
        }

        public option(name?: string, description?: string, action?: (cli: this) => any): IOptionContruct[] {
                if (name !== undefined) {
                        if (RegExp(/^[a-zA-Z0-9_]+$/).test(name)) { 
                                this._optionContruct.push({
                                        name: name,
                                        description: description,
                                        action: action,
                                });
                        }
                }

                return this._optionContruct;
        }
}
