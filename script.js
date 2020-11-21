// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase= 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*()';
var nums = '0123456789'



function question () {
  //Prompting for each type of character
    combo = special + uppercase + lowercase + nums
    lengthpass= parseInt(prompt('how many characters do you want your password to be'))
    specialQ = prompt('Do you want special characters? (y/n)')
    upper = prompt('do you want uppercase letters? (y/n)')
    lower = prompt('do you want lower case letters? (y/n)')
    numsQ = prompt('do you want numbers? (y/n)')
    answer = specialQ + upper + lower + numsQ
    
    //if statements on each type of character type
    if (answer.value == 'n') {
      charsetnew = combo - nocheck(true)
      writePassword()
    } 
    
    if (lengthpass >= 8 && lengthpass <= 128 && specialQ == 'y' && upper == 'y' && lower == 'y' && numsQ == 'y') {
      charsetnew = combo
      writePassword()
    } else if (lengthpass < 8 || lengthpass > 128) {
      prompt('invalid length!')
    } else if (specialQ == 'n' && upper == 'y' && lower == 'y' && numsQ == 'y') {
      charsetnew = uppercase+lowercase+ nums
      writePassword()
    } else if (upper == 'n' && lower == 'y' && numsQ =='y' && specialQ == 'y') {
      charsetnew = lowercase+ special + nums
      writePassword()
    } else if (lower =='n' && upper == 'y' && numsQ =='y' && specialQ == 'y') {
      charsetnew = uppercase+special+nums
      writePassword()
    } else if (numsQ =='n' && upper=='y' && specialQ =='y' && lower== 'y') {
      charsetnew= special + uppercase + lowercase
    }else if (numsQ=='n' && upper =='n' && specialQ =='y' && lower=='y'){
      charsetnew= special+lowercase
      writePassword()
    }else if (numsQ=='y' && upper =='y' &&specialQ =='n' && lower =='n'){
      charsetnew=nums + uppercase
      writePassword()
    }else if (numsQ=='n' && upper =='y' &&specialQ =='y' && lower== 'n'){
      charsetnew= uppercase+ special
    }else if (numsQ=='n' && upper =='n' &&specialQ =='n' && lower =='n'){
      prompt('Please select at least one type of character')
    } else {
      prompt('Your password is invalid. Please try again')
    }
    
      
      //else if (answer.value == 'n') {
    
    console.log(noCheck)
    
    }
    
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


