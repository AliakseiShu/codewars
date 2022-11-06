function bonusTime(salary, bonus) {
    if (bonus) {
        let result = salary * 10
        return `£${result}`
    } else
        return`£${salary}`
}