function validateUsr(username) {
    return /^[a-z\d_]{4,16}$/.test(username)
}