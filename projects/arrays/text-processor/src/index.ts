// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

// Esta función puede crear una nueva línea llenándola con palabras, siempre y cuando
// la longitud sea menor a la especificada.
export function lineFill(words: string[], width: number): string {
	let line = "";

	for (let word of words) {
		if (line.length + word.length <= width) {
			line += word;
			// Si la longitud de line es menor que width
			//      agregamos un espacio al final
			// Si no
			//      no agregamos nada
			line += line.length < width ? " " : "";
			words.shift();
		} else {
			break;
		}
	}

	return line;
}

export function alignLeft(line: string, width: number): string {
	return line + " ".repeat(width - line.length);
}

export function alignRight(line: string, width: number): string {
	return " ".repeat(width - line.length) + line;
}

export function alignMiddle(line: string, width: number): string {
	let availableSpace = width - line.length;
	if (availableSpace % 2 === 0) {
		return (
			" ".repeat(availableSpace / 2) + line + " ".repeat(availableSpace / 2)
		);
	} else {
		return (
			" ".repeat((availableSpace - 1) / 2) +
			line +
			" ".repeat((availableSpace - 1) / 2 + 1)
		);
	}
}

export function alignLines(
	lines: string[],
	width: number,
	align = "left"
): void {
	// Recorremos cada linea de las lineas y alineamos cada una
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];

		switch (align) {
			case "left":
				lines[i] = alignLeft(line, width);
				break;
			case "right":
				lines[i] = alignRight(line, width);
				break;
			case "middle":
				lines[i] = alignMiddle(line, width);
		}
	}
}

export function alignTexts(
	texts: string[],
	options: AlignmentOptions
): string[][] {
	let textAligned: string[][] = [];

	for (let text of texts) {
		// Get all words inside the text
		let words = text.split(" ");
		let lines: string[] = [];

		while (words.length > 0) {
			lines.push(lineFill(words, options.width).trim());
		}

		// Align all lines
		alignLines(lines, options.width, options.align);
		textAligned.push(lines);
	}

	return textAligned;
}
