function solve(s) {
    const result = s.split("").filter((el) => el === el.toUpperCase());
    return result.length > s.split("").length / 2
        ? s.toUpperCase()
        : s.toLowerCase();
}