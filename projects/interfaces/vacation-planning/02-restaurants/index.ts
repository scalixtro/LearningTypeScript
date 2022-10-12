// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

export interface Restaurant {
	city: string;
	name: string;
}

export interface RestaurantsGrouped {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]) {
	// Lo que tenemos que hacer es obtener las ciudades unicas
	let grouped: RestaurantsGrouped = {};

	for (let restaurant of restaurants) {
		try {
			grouped[restaurant.city].push(restaurant.name);
		} catch (e) {
			grouped[restaurant.city] = [];
			grouped[restaurant.city].push(restaurant.name);
		}
	}

	return grouped;
}
