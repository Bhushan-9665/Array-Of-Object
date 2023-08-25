// var que1 = document.getElementById("Que1");
let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];


  let studentNamesCaps = studentRecords.map((student) =>
    student.name.toUpperCase())
    document.getElementById("Que1").innerHTML = studentNamesCaps



    let students2 = studentRecords.filter(student => student.marks > 50);
    document.getElementById("Que2").innerHTML = students2
    console.log(students2)


    

 

