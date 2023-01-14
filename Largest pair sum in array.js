function largestPairSum(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .slice(-2)
        .reduce((acc, sum) => acc + sum, 0);
}