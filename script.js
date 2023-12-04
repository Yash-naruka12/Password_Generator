let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector("#passBox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector("#genBtn");
let copyIcon = document.querySelector("#copyIcon");

sliderValue.innerText = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.innerText = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "~!@#$%^&*";

let generatePassword = () => {
  let genPassword = "";
  let allchars = "";
  allchars += lowercase.checked ? lowerLetters : "";
  allchars += uppercase.checked ? upperLetters : "";
  allchars += numbers.checked ? number : "";
  allchars += symbols.checked ? symbol : "";

  for (let i = 1; i < inputSlider.value; i++) {
    genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
  }
  return genPassword;
};

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passBox.value);
  let createSpan = document.createElement("span");
  let inputBox = document.querySelector(".inputBox");
  let i = document.createElement("i");
  let fa_regular = document.querySelector(".fa-regular");
  i.setAttribute("class", "fa-solid fa-check");
  inputBox.append(createSpan);
  createSpan.append(i);
  fa_regular.style.display = "none";

  setTimeout(() => {
    fa_regular.style.display = "block";
    let fa_solid = document.querySelector(".fa-solid");
    fa_solid.style.display = "none";
  }, 1000);
});
