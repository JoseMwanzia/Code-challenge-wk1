//PROMPT USER TO INPUT STUDENT MARKS

//declare variables 
let marks = 0 <= 100;

//Declare the prompt for student to input value
let studentMarks = prompt(parseInt(marks));

//Use conditional if...else if to organise the grade according to marks obtained.
if (studentMarks >= 80) {
    console.log("A")
} else if (studentMarks <= 79 && studentMarks >= 60) {
    console.log("B");
}else if (studentMarks <= 59 && studentMarks >= 49) {
    console.log("C");
} else if (studentMarks <= 49 && studentMarks >=40) {
    console.log("D");
} else if (studentMarks <= 39 && studentMarks >= 0) {
    console.log("E");
}