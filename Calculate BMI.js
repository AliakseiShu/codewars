function bmi(weight, height) {
    let result = (weight/height ** 2)
    return result <= 18.5 ? "Underweight" : result <= 25.0 ? "Normal" : result <=30.0 ? "Overweight" : "Obese"
}