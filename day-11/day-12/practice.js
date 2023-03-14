let numberArray = [];
let numberParagraph = document.getElementById("one");
let numberInput = document.getElementById("two");
numberInput.value = 0;
function myNumber() {
  numberArray.push(Number(numberInput.value));
  numberParagraph.innerHTML = numberArray.join("|");
}
const student = [];
const studentName = document.getElementById("four");
const studentIDname = document.getElementById("three");
studentIDname.value = 0;
function myStudents() {
  student.push((studentIDname.value));
  studentName.innerHTML = student.join("|");
}
