// Declare your variables and runtime logic here! ✨
export type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

// Function Types
export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Ingredients;
// Return Function Types
export type Announce = () => string;
export type Clean = (time?: number) => void;
export type Purchase = (expense: number) => boolean;

// Prepare Function
export type RecipeFailure = {
	succeeded: false;
};

export type RecipeSuccess = {
	succeeded: true;
	newStock: Ingredients;
};

export type Recipe = RecipeFailure | RecipeSuccess;
export type Prepare = (recipe: (ingredients: Ingredients) => Recipe) => boolean;

export type Kitchen = {
	announce: Announce;
	clean: Clean;
	purchase: Purchase;
	prepare: Prepare;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock: Ingredients = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	let kitchen: Kitchen = {
		announce:
			() => `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), \
${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`,
		clean: (time) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense) => {
			if (budget >= expense) {
				let supplies = supplier(expense);
				stock.breads += supplies.breads;
				stock.fruits += supplies.fruits;
				stock.sauces += supplies.sauces;
				stock.vegetables += supplies.vegetables;
				budget -= expense;
				return true;
			}
			return false;
		},
		prepare: (recipe) => {
			if (dirt < 100) {
				let tryRecipe = recipe(stock);
				dirt += 1;
				if (tryRecipe.succeeded) {
					stock = tryRecipe.newStock;
					return true;
				}
			}
			return false;
		},
	};
	return kitchen;
}
