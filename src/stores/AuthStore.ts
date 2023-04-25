import { makeObservable, observable } from 'mobx';

export class AuthStore {
    public email: string = 'test@test.com';

    constructor() {
        makeObservable(this, {
            email: observable,
        });
    }
}
