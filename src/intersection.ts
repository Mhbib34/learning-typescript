interface HasName {
	name: string;
}

interface HasAge {
	age: number;
}

type Person = HasName & HasAge;
