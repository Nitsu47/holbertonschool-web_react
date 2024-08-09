export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface{
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface{
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
	let numericSalary: number;

	if (typeof salary === 'string') {
	  numericSalary = parseFloat(salary);
	} else {
	  numericSalary = salary;
	}
	
  if (numericSalary < 500) {
    return new Teacher();
  }

  return new Director();
}
