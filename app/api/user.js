const tokenName = `${window.location.origin}-jwt`

export function login(credentials) {
    return Stamplay.User.login(credentials)
}

export function signUp(credentials) {
    return Stamplay.User.signup(credentials)
}

export function getCurrentUser() {
    return Stamplay.User.currentUser()
}

export function logOut() {
    return new Promise((resolve, reject) => {
        window.localStorage.removeItem(tokenName)
        resolve()
    })
}