function validatePIN (pin) {

    if (pin.length !== pin.replace(/[^0-9]/g, '').length){
        return false
    } else if (pin.length === 4 || pin.length === 6) {
        return true
    }
    return false }