const employee = 
{
    name: 'John',
    age: 25,
    designation: 'Software Developer',
    salary: function()
    {
      return 1000 + this.age*4;
    }
};
console.log(employee.salary); 
// this method access salary as function: employee.salary()
const employee1 = 
{
    name: 'John',
    age: 25,
    designation: 'Software Developer',
    language: 'eng',
    city: '',
    get salary()
    {
      return 1000 + this.age*4;
    },
    get lang()
    {
      return this.language.toUpperCase();
    },
    set cityOfWork(x)
    {
      this.city = x.toUpperCase();
    }
};
console.log(employee1.salary); 
// this method access salary as property: employee.salary

console.log(employee1.lang);
employee1.cityOfWork = 'Bangalore';
console.log(employee1.city);
