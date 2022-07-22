function eachCons(array, n) {
	const result = []
	for (let i = 0; i <= array.length - n; i++) {
		const chunk = []
		for (let j = i; j < i + n; j++) {
			chunk.push(array[j])
		}
		result.push(chunk)
	}
	return result;
}