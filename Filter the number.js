var filterString = function (value) {
    return +[...value].filter((el) => el === '0' || Number(el)).join('')
}