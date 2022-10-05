// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(a: string[], b: string[]) {
	if (a.length === b.length) {
		let n = a.length;
		let returnArray: (string | undefined)[] = new Array(n);

		for (let i = 0; i < n; i++) {
			returnArray[i] = a[i] === b[i] ? a[i] : undefined;
		}

		return returnArray;
	}

	return undefined;
}
