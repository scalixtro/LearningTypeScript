// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (input: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let vowels = /[aeiou]/i;
		let consonants = /[bcdfghjklmnpqrstvwxyz]/i;
		let cipherText = "";

		for (let char of text) {
			char = char.toLowerCase();

			if (vowels.test(char)) {
				cipherText += onVowel(char);
			} else if (consonants.test(char)) {
				cipherText += onConsonant(char);
			} else {
				cipherText += onPunctuation(char);
			}
		}

		return cipherText;
	};
}
