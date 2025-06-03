export interface Seller {
	id: number;
	name: string;
	age?: number;
}

export interface Employee {
	id: number;
	name: string;
	age: number;
}

export interface Manager extends Employee {
	role: string;
}
