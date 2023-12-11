import { IOptionContruct, IResultOK } from './cli.type';

/**
 *
 */
export default class CommandLineInterface {
        private _optionContruct: IOptionContruct[];
        private _optionExec: string[];

        private _ok: boolean;
        private _reason: string;

        private _stepContruct: any | any[];

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

        public step(callBack: () => any): this {
                return this;
        }

        public call(): any | any[] {}

        public pushOptionForExecute(name: string): this {
                this._optionExec.push(name);
                return this;
        }

        public exec(callBack?: () => any): void {
                if (this._ok) {
                        
                }
        }

        public isOptionProcess(name: string): boolean {
                if (name.startsWith('-') || name.startsWith('--')) {
                }

                for (let i = 0; i <= this._optionContruct.length; i++) {
                        if (name !== this._optionContruct[i].name) continue;
                }
        }

        public option(name?: string, description?: string): IOptionContruct[] {
                if (name !== undefined) {
                        if (RegExp().test()) {
                                if (name.startsWith('-')) {
                                }

                                this._optionContruct.push({
                                        name: name,
                                        description: description,
                                });
                        }
                }

                return this._optionContruct;
        }
}
