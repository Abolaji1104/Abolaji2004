// given an array of employee
// he has name,home email,departemnt,salary,employement date
// write a function that accept employee and add it to the list of the array
// ................  ......... two parameter(date from. date to) and return the employee whose employment date
//  is within the given date
// ................  that return an arrray of employee wuth invalid email address
//.................  ...........   employee with the lowset and the hightest and lowest paid


 let Employee = [
    {name: "Olayiwola", home: "fajol", email: "abolaji@gmail.com", department: "engineering", salary: 30000, empdate: "31-01-2022"},

    {name: "Olayemi", home: "olosun", email: "saheed@gmail.com", department: "economics", salary: 20000, empdate: "25-02-2022"},

    {name: "Oni", home: "Olomore", email: "hokage@gmail.com", department: "medcine and surgery", salary: 35000, empdate: "20-03-2022"},

    {name: "Alaran", home: "Amazing strt", email: "mahmudah@gmail.com", department: "law", salary: 27000, empdate: "10-04-2022"},

    {name: "Olowolagba", home: "Sabo", email: "zino@gmail.com", department: "accounting", salary: 15000, empdate: "30-05-2022"}
 ] 



// 1 write a function that accept employee and add it to the list of the array
  Employee.push({ name: "Kilasho",home: "ALogi", email: "abdulhameed@gmail.com", department: "geology", salary: 10000, emp: "30-05-2022"} 
  )

console.log(Employee)



// let entrydate = Employee.sort((datefrom, dateto) => {
//    return Employee[datefrom, dateto] == 25-02-2022 &&  10-04-2022
// })

// console.log(entrydate)


// function getInvaliddetals(notintact){
//     if (email == "anike@gamil.com"){
//         return "valid details"
//     } else{
//         return "Invalid email address"
//     }

// }


// Employee.forEach(staff=>{
//      getInvaliddetals(staff)
// }
//  )


// 4 Write a function that return the employee with the lowset and the hightest and lowest paid

 function minMaxPaid(employeeArray) {m
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
  
  console.log(minMaxPaid(Employee));