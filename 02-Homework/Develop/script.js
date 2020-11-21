// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase= 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*()';
var nums = '0123456789'



function question () {
    combo = special + uppercase + lowercase + nums
    lengthpass= parseInt(prompt('how many characters do you want your password to be'))
    specialQ = prompt('Do you want special characters? (y/n)')
    upper = prompt('do you want uppercase letters? (y/n)')
    lower = prompt('do you want lower case letters? (y/n)')
    numsQ = prompt('do you want numbers?')
    answer = specialQ + upper + lower + numsQ
    noCheck = answer

    if (answer.value == 'n') {
      charsetnew = combo - nocheck(true)
      writePassword()
    } 
    // check for 
    if (lengthpass >= 8 && lengthpass <= 128 && specialQ == 'y' && upper == 'y' && lower == 'y' && numsQ == 'y') {
      charsetnew = combo
      writePassword()
    } else if (lengthpass < 8 || lengthpass > 128) {
      prompt('invalid!')
    } else if (specialQ == 'n' && upper == 'y' && lower == 'y' && numsQ == 'y') {
      charsetnew = (combo - specialQ)
    } else if (upper == 'n' && lower == 'y' && numsQ =='y' && specialQ == 'y') {
      charsetnew = lowercase+ special + nums
    } else if (lower =='n' && upper == 'y' && numsQ =='y' && specialQ == '') {
      charsetnew = uppercase+special+nums
    } else if (numsQ =='n') {
      charsetnew= special + uppercase + lowercase
    }//finish rest of else ifs 
    
      
      //else if (answer.value == 'n') {
    
    console.log(noCheck)
    
    }
    
    


        
  






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


