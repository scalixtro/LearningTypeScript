export function runCommands() {
	let supply: "food" | "water" | undefined = undefined;
	let food = 5;
	let water = 5;
	let dice: number;

	for (let day = 1; day <= 7; day += 1) {
		dice = Math.floor(Math.random() * 6) + 1;

		switch (dice) {
			case 1:
				supply = "food";
				break;
			case 2:
				supply = "water";
				break;
			default:
				if (!supply) {
					supply = dice % 2 == 0 ? "food" : "water";
				} else {
					supply === "food" ? (food += dice) : (water += dice);

					supply = undefined;
				}
		}

		food -= 1;
		water -= 1;

		if (food == 0 || water == 0) {
			return false;
		}
	}

	return true;
}
