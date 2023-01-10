function smallEnough(a, limit) {
    const arr = a.filter((el) => {
        return el <= limit;
    });
    return arr.length !== a.length ? false : true
}