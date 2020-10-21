// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  if (password == undefined){
    //do nothing
  }else{
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  

}

function  generatePassword(){
  var len;
  
  var l = prompt("What is the length you want for your password (8-128)\nLeave it empty if you want **Random number** ");

   if(l == ""||l==null){
    len = Math.floor(Math.random()*128)+8
    //random number between 8 128
   }else{
    parseInt(l)
    if (l >8 && l<128){
      len = l
    }else{
      alert("You should input number between 8 and 128, please start again")
      return
    }
  
   }


  var lowercase= confirm("Do you need **Lowercase**? \nOK -> Yes\nCancel -> No")

  var uppercase= confirm("Do you need **Uppercase**? \nOK -> Yes\nCancel -> No")

  var numeric  = confirm("Do you need **Numeric**? \nOK -> Yes\nCancel -> No")

  var spec_char= confirm("Do you need **Special Characters**? \nOK -> Yes\nCancel -> No")

  if(lowercase==false&&uppercase==false&&numeric==false&&spec_char==false){
    alert("You need choose at least one character type, please start again")
    return
  }



  var charSet=""
  if(lowercase == true){
     charSet +="abcdefghijklmnopqrstuvwxyz"
   }
  if(uppercase== true){
    charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(numeric==true){
    charSet+="1234567890"
  }
  if(spec_char==true){
    charSet+="\xa0!\"#%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
   //alert(charSet)
  var password =""
  n = charSet.length
  for(var i = 0; i<len;i++){
    password +=charSet.charAt(Math.floor(Math.random()*n))
  }
 
  return password
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
