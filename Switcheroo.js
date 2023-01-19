function switcheroo(x) {
    return x.replace(/[ab]/g, (element) => (element == "a" ? "b" : "a"));
}
