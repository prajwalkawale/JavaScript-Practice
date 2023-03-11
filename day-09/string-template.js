let person = `"Clay jenson"`;
document.getElementById("demo").innerHTML = person;
console.log("back tics", person);

let clay = `the 'clay' charecter is realy "innocent" `;
document.getElementById("one").innerHTML = clay;
console.log("clay::", clay);

const demo = `the sentence can be
          written in the line break format
          we can write sentences in multiple lines
          but in the double qoutes this method is 
          not applicable`;
console.log("sentences methods::", demo);
document.getElementById("two").innerHTML = demo;
 
let firstName = `Azar`
let lastName = `coaching classes`
let fullName = `"Welcome to the ${firstName} ${lastName}"`
console.log("fullName::",fullName);
document.getElementById("three").innerHTML=fullName;

let price = 25 ;
let pen = 5 ;
let totall = `the total pen is ${(price)*(pen)}`
console.log("addition::",totall)
document.getElementById("four").innerHTML=totall ;

let number = 225e3 ;
document.getElementById("five").innerHTML=number ;


document.getElementById("six").innerHTML=100/"xyz";
