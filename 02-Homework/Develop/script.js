// Assignment Code
var generateBtn = document.querySelector("#generate");
//var lengthpass = question()

// Q&A functions 


//function for including lowercase 


//function prompts
function question () {
  lengthpass= parseInt(prompt('how many characters do you want your password to be'))
  if (lengthpass >= 8 && lengthpass <= 128) {
    writePassword() 
  } else { 
    prompt('That password is invalid!') 
  }
  
  return lengthpass;
} 



//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

//generate password
function generatePassword() {
  var length = lengthpass,
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' 
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function for including uppercase
function uppercasechar () {
  charuppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  charset.append(charuppercase)

}
//function for including special characters
function specialcharacter () {
  charspecial ='!@#$%^&*()_'
  charset.append(charspecial)
 

}

//btnPmpt.addEventListener = ('click', writePassword)

// Add event listener to generate button
generateBtn.addEventListener('click', question)


//lengthpass.onclick =  writePassword()
//generateBtn.addEventListener("click", lengthpass)
