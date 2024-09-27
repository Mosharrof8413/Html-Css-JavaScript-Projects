const passwordBox = document.getElementById("Password");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    console.log('clicked');
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (password.length < len) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  console.log(password);
  passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
    
}
