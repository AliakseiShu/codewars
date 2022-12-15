function combat(health, damage) {
    const result = health-damage
    return result >= 0 ? result : 0
}