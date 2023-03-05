function isPowerOfTwo(n) {
    return !!n && (n & (n - 1)) == 0;
}