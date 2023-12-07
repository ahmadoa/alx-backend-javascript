interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 56,
  location: 'New York',
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Doe',
  age: 65,
  location: 'Canada',
};

const studentsList: Array<Student> = [student1, student2];

const bodyHtml = document.getElementsByTagName('body')[0];
const tableHtml = document.createElement('table');
const borderDefinition = 'solid #000000 1px';
tableHtml.style.borderCollapse = 'collapse';
tableHtml.style.border = borderDefinition;

studentsList
  .map((student) => {
    const row = document.createElement('tr');
    Object.entries(student).forEach(([key, value]) => {
      const data = document.createElement('td');
      data.innerHTML = value;
      data.style.border = borderDefinition;
      data.style.padding = '7px';
      row.appendChild(data);
    });
    return row;
  })
  .forEach((row) => {
    tableHtml.appendChild(row);
  });
bodyHtml.appendChild(tableHtml);
