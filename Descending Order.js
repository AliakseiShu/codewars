function descendingOrder(n) {
    const result = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("");
    return +result;
}