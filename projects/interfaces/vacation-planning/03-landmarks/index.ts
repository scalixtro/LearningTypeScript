// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

export interface LandmarkBase {
	name: string;
	type:
		| "mountain"
		| "park"
		| "lighthouse"
		| "lake"
		| "fort"
		| "river"
		| "waterfall";
}

export interface Mountain extends LandmarkBase {
	height: number;
	type: "mountain";
}

export interface Park extends LandmarkBase {
	acres: number;
	type: "park";
}

export interface Lighthouse extends LandmarkBase {
	height: number;
	lit: number;
	type: "lighthouse";
}

export interface Lake extends LandmarkBase {
	miles: number;
	type: "lake";
}

export interface Waterfall extends LandmarkBase {
	height: number;
	type: "waterfall";
}

export interface River extends LandmarkBase {
	depth: number;
	length: number;
	type: "river";
}

export interface Fort extends LandmarkBase {
	type: "fort";
}

export type Landmark =
	| Mountain
	| Park
	| Lighthouse
	| Lake
	| Waterfall
	| River
	| Fort;

export function describeLandmark(landmark: Landmark) {
	let firstLine = `${landmark.name} is a ${landmark.type} in Upstate New York.`;
	let secondLine = "";

	switch (landmark.type) {
		case "lake":
			secondLine += `It covers ${landmark.miles} square miles of water.`;
			break;
		case "lighthouse":
			secondLine += `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "mountain":
			secondLine += `Its peak is ${landmark.height} feet high.`;
			break;
		case "park":
			secondLine += `It covers ${landmark.acres} square acres.`;
			break;
		case "river":
			secondLine += `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			secondLine += `It is ${landmark.height} feet high.`;
			break;
		case "fort":
			return firstLine;
	}

	return `${firstLine}
${secondLine}`;
}
