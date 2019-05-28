

let divison = document.querySelectorAll(".liclass");
console.log(divison);

let button = document.querySelector("#button");
console.log(button);

let img = document.querySelector("img");
console.log(img);
let p = document.querySelector("p");
console.log(p);




//making all li black color
const lists = function() {
  for (i = 0; i < divison.length; i++) divison[i].style.color = "black";
};


//clearning the text fields of inputs 
const empty = function() {
  let mass1 = document.querySelector("#mass");
  let height1 = document.querySelector("#height");
  mass1.value = "";
  height1.value = "";
};

button.addEventListener("click", function(e) {
  lists();

  let mass = document.querySelector("#mass").value;
  let height = document.querySelector("#height").value;
  let bmi = (mass / (height * height)).toFixed(2);
  if (mass === "" || height === "") {
    p.textContent = " Please enter the required values.";
  }

  if (bmi >= 30) {
    p.textContent = ` Your BMI is ${bmi}. You are Obese.`;
    divison[3].style.color = "red";
    img.src = "./assets/obese.jpg";
  } else if (bmi < 30 && bmi >= 25) {
    p.textContent = ` Your BMI is ${bmi}. You are overweight.`;
    divison[2].style.color = "orange";
    img.src = "./assets/overweight.jpg";
  } else if (bmi < 25 && bmi >= 18.5) {
    p.textContent = ` Your BMI is ${bmi}. You are Normal.`;
    divison[1].style.color = "green";
    img.src = "./assets/normal.jpg";
  } else if (bmi < 18.5) {
    p.textContent = ` Your BMI is ${bmi}. You are Underweight.`;
    divison[0].style.color = "red";
    img.src = "./assets/underweight.jpg";
  } else {
    divison.textContent = "enter valid value";
  }
  empty();
  // e.preventDefault();
});

