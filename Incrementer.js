function incrementer(nums) {
    return nums.map((el, i) => {
        return (el + i + 1) % 10
    })
}