// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

export interface City {
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	name: string;
	catchphrase?: string;
}

export function formatCoordinate(coordinate: number) {
	return coordinate / 10 >= 1 ? coordinate : `0${coordinate}`;
}

export function formatCoordinates(coordinates: [number, number, number]) {
	let first = formatCoordinate(coordinates[0]);
	let second = formatCoordinate(coordinates[1]);
	let third = formatCoordinate(coordinates[2]);

	return `${first}°${second}'${third}"`;
}

export function describeCity(city: City) {
	return city.catchphrase
		? `${city.name}, New York
* "${city.catchphrase}"
* Located at ${formatCoordinates(city.coordinates.north)}N ${formatCoordinates(
				city.coordinates.west
		  )}W`
		: `${city.name}, New York
* Located at ${formatCoordinates(city.coordinates.north)}N ${formatCoordinates(
				city.coordinates.west
		  )}W`;
}
