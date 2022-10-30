function sum (numbers) {
    "use strict";
    const result = numbers.reduce((acc, num) => acc + num, 0)
    return result ? result : 0
};