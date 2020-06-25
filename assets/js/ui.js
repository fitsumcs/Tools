class UI
{
   constructor()
   {
       this.passWordResult = document.getElementById('result');
   }



//  generatePassword
getPassword(data)
{
    this.passWordResult.innerHTML = `Result : ${data}`;
}  



}