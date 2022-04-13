var username=document.getElementById("username");
 
 function genUsername() {
    var chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var usernameLength = 12;
    var username = "";
 for (var i = 0; i <= usernameLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   username += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("username").value = username;
 }
 
function copyUsername() {
  var copyText = document.getElementById("username");
  copyText.select();
  document.execCommand("copy");  
}