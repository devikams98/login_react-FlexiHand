import { extendObservable } from 'mobx';


class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            logout: false,
            username: ''
        })
    }
}

export default new UserStore();