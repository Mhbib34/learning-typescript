interface HasName {
	name: string;
}

interface HasAge {
	age: number;
}

export type Person = HasName & HasAge;
