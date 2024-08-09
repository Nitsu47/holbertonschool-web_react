export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {
	firstName: string;
	lastName: string;

constructor(firstName: string, lastName: string) {
	this.firstName = firstName
	this.lastName = lastName
}

workOnHomework(): string {
	return 'Currently working';
}

displayName(): string {
	return `${this.firstName}`
}
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
