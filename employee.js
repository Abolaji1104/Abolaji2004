let Employee = [
    {name: "Olayiwola", home: "fajol", email: "abolaji@gmail.com", department: "engineering", salary: 30000, empdate:  new Date("2022-01-31")},

    {name: "Olayemi", home: "olosun", email: "saheed@gmail.com", department: "economics", salary: 20000, empdate: new Date("2022-02-25")},

    {name: "Oni", home: "Olomore", email: "hokage@gmail.com", department: "medcine and surgery", salary: 35000, empdate: new Date("2022-03-20")},

    {name: "Alaran", home: "Amazing strt", email: "mahmudah@gmail.com", department: "law", salary: 27000, empdate: new Date("2022-04-10")},

    {name: "Olowolagba", home: "Sabo", email: "zino@gmail.com", department: "accounting", salary: 15000, empdate: new Date("2022-05-30")}
 ]

 
  let getName = Employee.filter((element)=> {
       return element.name
     })

//  console.log(getName)




function date_range(date_from, date_to) {

    let date_list = []
    date_list.sort;

    for ( let x in Employee) {
        if ('empdate' in Employee[x]) {
            date_list.push(Employee[x].empdate);
        }
    }

console.log(date_list);

// let date_from = new Date('2022-01-25')
// let date_to = new Date('2022-03-25')
    
let date_between = []
    for(let i in date_list){
        if(date_from <= date_list[i] && date_list[i] <= date_to){
            date_between.push(date_list[i]);
        }
    }

    console.log(date_between);

// for (let a in Employee){
//     if(Object.values(a).includes(date_between)){
//         console.log(a);
//     }
// }

function exists(obj) {
    return Employee.some(function(el) {
        return el.obj === obj
    })
}
console.log(exists(date_between));
}

date_range(new Date('2022-01-01'), new Date('2022-04-19'))

let email_list = []

    for ( let x in Employee) {
        if ('email' in Employee[x]) {
            email_list.push(Employee[x].email)
        }
    }

// if ('@gmail.com' in email_list){
//     return email_list
// }

// console.log(email_list);


let salary_list = []

    for ( let x in Employee) {
        if ('salary' in Employee[x]) {
            salary_list.push(Employee[x].salary)
        }
    }

// console.log(salary_list);

function minMaxPaid(employeeArray) {
    return {
      lowestPaid: employeeArray.filter(
        (employee) =>
          employee.salary ===
          Math.min(...employeeArray.map((employee) => employee.salary))
      ),
      highestPaid: employeeArray.filter(
        (employee) =>
          employee.salary ===
          Math.max(...employeeArray.map((employee) => employee.salary))
      ),
    };
  }
  
  console.log(minMaxPaid(arr));