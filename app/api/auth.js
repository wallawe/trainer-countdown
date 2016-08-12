const tokenName = `${window.location.origin}-jwt`;

let auth = {
    logIn(credentials) {
        if (this.userLoggedIn()) {
            return new Promise((resolve, reject) => {
                let user = localStorage.getItem('currentUser');
                resolve(JSON.parse(user));
            })
        }

        this.changeSessionStatus(true);
        return Stamplay.User.login(credentials);
    },
    signUp(credentials) {
        return Stamplay.User.signup(credentials);
    },
    getCurrentUser() {
        return Stamplay.User.currentUser();
    },
    logOut() {
        return new Promise((resolve, reject) => {
            window.localStorage.removeItem('currentUser');
            window.localStorage.removeItem(tokenName);
            resolve();
        });
    },
    changeSessionStatus() {},
    userLoggedIn() {
        return localStorage.getItem(tokenName);
    },
    // getLsUser() {
    //     let user = localStorage.getItem('currentUser');
    //     return JSON.parse(user);
    // },
    setLsUser(data) {
        console.log('get here' + data);
        let currentUser = JSON.stringify(data);
        localStorage.setItem('currentUser', currentUser);
    }
}

export default auth;