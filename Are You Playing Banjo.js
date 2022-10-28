function areYouPlayingBanjo(name) {
    let result = name.toLowerCase().charAt(0) == 'r'
    return result ? name + ' plays banjo' : name + ' does not play banjo'
}