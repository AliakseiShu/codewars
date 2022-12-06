function multipleOfIndex(array) {
    return array.filter((el, idx) => el % idx === 0);
}