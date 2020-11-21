// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase= 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*()';
var nums = '0123456789'

var choices =['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '!@#$%^&*()', '0123456789'  ]


function question () {
    lengthpass= parseInt(prompt('how many characters do you want your password to be'))
    specialQ = prompt('Do you want special characters? (y/n)')
    upper = prompt('do you want uppercase letters? (y/n)')
    //lower = prompt('do you want lower case letters? (y/n)')
    //numsQ = prompt('do you want numbers?')
    // check for 
    if (lengthpass >= 8 && lengthpass <= 128 && specialQ == 'y' && upper == 'y') {
      charsetnew = nums + upper
      writePassword() 
      console.log(charsetnew)
    } 
    else {
      prompt('invalid!')
    }
    
    /*if (specialchar == 'y') {
      writePassword()
    }else {
      writePassword(), }*/

        
  
}
    /*} else if (specialQ == 'y') { 
      answers += answers.concat.choices[2]
    } else if (upper == 'y') {
      answers += answers.concat.choices[0]
    } else if (lower == 'y') {
      answers += answers.concat.choices[1]
    } else if (numsQ == 'y'){
      answers += answers.concat.choices[3]
    } */


//prompt('That password is invalid!') 
/*function specialquestion () {
  specialchar =prompt('would you like to add special characters? (y/n)')
  if (specialchar == 'y'){
    charsetnew=charset.concat(special)
    writePassword()
  } else {
      charset.concat('')
    writePassword()
  return charsetnew; }
}*/



//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

//generate password
function generatePassword() {
  var length = lengthpass,
      charset = charsetnew
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


// Add event listener to generate button
generateBtn.addEventListener('click', question)


