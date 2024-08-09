interface student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: student = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
	location: "Uruguay",
};

const student2: student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 26,
	location: "Uruguay",
};

let studentsList: student[] = [student1, student2];

function renderTable() {
	const tableData = studentsList.map((item) => {
		return `
		<tr>
		<td>${item.firstName}</td>
		<td>${item.lastName}</td>
		<td>${item.age}</td>
		<td>${item.location}</td>
		</tr>
		`;
	}).join('');

	const myStudentsTable = `
	<table>
	<thead>
	<tr>
	<th>First Name</th>
	<th>Last Name</th>
	<th>Age</th>
	<th>Location</th>
	</tr>
	<tbody>
		${tableData}
	</tbody>
	</thead>
	</table>
	`;

	document.body.innerHTML = myStudentsTable;
}

renderTable();
