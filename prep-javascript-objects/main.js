const person = {
  firstName: 'Jimmy',
  lastName: 'Wu',
  hobby: 'Playing video games'
};

console.log(person);

const fullName = "The person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = "The person's current job is: not available.";
console.log(person.job);

person.previousJob = "The person's previous job was: Teacher";
console.log(person.previousJob);

console.log(person);
