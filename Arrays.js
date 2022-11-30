// //const addValue = function(){}


// //1.find 2.filter 3. map 4.reduce 5.foreach
// const addValue2 = (myValue)=>{
//     return myValue +2;
// }
// console.log(addValue2(100))

// const multiplyByThenAdd2 = (sample)=>{
// let output = sample * 10
// return addValue2(output)
// }
// console.log(multiplyByThenAdd2(2))


let studentDetails = [
  {name: "Olayemi", testScore: 20, examScore: 70, Subject: "Mathematics",    matricNumber: 1012567},
  {name: "Kilasho", testScore: 30, examScore: 20, Subject: "Physics",        matricNumber: 1013456},
  {name: "Adeyeri", testScore: 25, examScore: 40, Subject: "Economics",      matricNumber: 1015678},
  {name: "Alliy", testScore: 15, examScore: 10, Subject: "Literature",       matricNumber: 1017890},
  {name: "Olayiwola", testScore: 30, examScore: 6, Subject: "Chemistry",   matricNumber: 1013987},
  {name: "Oni", testScore: 10, examScore: 65, Subject: "Biology",            matricNumber: 1014598},
  {name: "Olowolagba", testScore: 28, examScore: 69, Subject: "Accounting",  matricNumber: 101111},
  {name: "Abdulsamad", testScore: 20, examScore: 70, Subject: "Mathematics", matricNumber: 1012222},
  {name: "Adeshina", testScore: 21, examScore: 71, Subject: "Commerce",      matricNumber: 1013333},
  {name: "Adebakin", testScore: 29, examScore: 0, Subject: "Government",    matricNumber: 1014444},
]


// //find array method
// let chemistryStudent =  studentDetails.find((student)=>{
//    return student.Subject == "Chemistry"
// })
// console.log(chemistryStudent)


// let testScoreLessThan20 = studentDetails.filter((students)=>{
//     return students.testScore <25
// })
// console.log("===========================")
// console.log(testScoreLessThan20)