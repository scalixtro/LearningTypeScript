// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowEquality(a: string[], b: string[]) {
	if (a.length === 0 && b.length === 0) {
		return true;
	} else if (a.length != b.length) {
		return false;
	} else {
		for (let i = 0; i < a.length; i++) {
			if (a[i] != b[i]) return false;
		}
	}

	return true;
}

export function deepEquality(a: string[][], b: string[][]) {
	if (a.length === 0 && b.length === 0) {
		return true;
	}
	if (a.length === b.length) {
		// Tomar la longitud del array de arrays e ir recorriendo cada elemento
		// Si las longitudes de cada elemento son diferentes, entonces retornamos false
		// Si coinciden, entonces comparamos elemento por elemento
		let nArrays = a.length;

		for (let i = 0; i < nArrays; i++) {
			if (!shallowEquality(a[i], b[i])) {
				return false;
			}
		}

		return true;
	}

	return false;
}
