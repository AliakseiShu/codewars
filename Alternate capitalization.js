function capitalize(s) {
    let v1 = s
        .split("")
        .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("");
    let v2 = s
        .split("")
        .map((el, i) => (i % 2 === 0 ? el.toLowerCase() : el.toUpperCase()))
        .join("");
    return [v1, v2];
}