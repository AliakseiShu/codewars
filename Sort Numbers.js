function solution(nums) {
    if (nums === [] || nums === null) return []
    return nums.sort((a, b) => a - b)
}