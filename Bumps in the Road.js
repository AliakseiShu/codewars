function bump(x) {
    return x.split("").filter((el) => el === "n").length > 15
        ? "Car Dead"
        : "Woohoo!";
}