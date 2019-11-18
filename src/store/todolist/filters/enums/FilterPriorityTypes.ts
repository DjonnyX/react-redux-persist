export enum FilterPriorityTypes {
	ALL,
	SIMPLE,
	IMPORTANT,
	MOST_IMPORTANT
}

export const FILTERS_COLLECTION = [
	{ name: "all", value: FilterPriorityTypes.ALL },
	{ name: "simple", value: FilterPriorityTypes.SIMPLE },
	{ name: "important", value: FilterPriorityTypes.IMPORTANT },
	{ name: "most-important", value: FilterPriorityTypes.MOST_IMPORTANT }
];
