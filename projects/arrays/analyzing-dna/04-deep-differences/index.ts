// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

// Array which elements could be undefined or an array of: strings or undefined
export type DnaArray = (undefined | (string | undefined)[])[];

export function compareSequences(a: string[], b: string[]) {
	let lengthA = a.length;
	let lengthB = b.length;

	if (lengthA !== lengthB) {
		return undefined;
	}

	let compareArray: (undefined | string)[] = new Array(lengthA);

	for (let i = 0; i < lengthA; i++) {
		compareArray[i] = a[i] === b[i] ? a[i] : undefined;
	}

	return compareArray;
}

export function deepDifferences(a: string[][], b: string[][]) {
	let maxLength = Math.max(a.length, b.length);
	let dnaDifferences: DnaArray = new Array(maxLength);

	if (a.length != b.length) {
		dnaDifferences.fill(undefined);
		return dnaDifferences;
	}

	for (let i = 0; i < maxLength; i++) {
		dnaDifferences[i] = compareSequences(a[i], b[i]);
	}

	return dnaDifferences;
}
