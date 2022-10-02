// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Input = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(input: Input) {
	return (text: string) => {
		for (let attempt = 0; attempt < input.attempts; attempt++) {
			let guess = input.makeGuess(text, attempt);

			if (input.validateGuess(guess)) {
				return guess;
			}
		}

		return undefined;
	};
}
