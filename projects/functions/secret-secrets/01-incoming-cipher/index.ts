// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (input: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let cipherText: string = "";

		for (let char of text) {
			cipherText += cipher(char);
		}

		return cipherText;
	};
}
