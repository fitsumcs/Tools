class UI
{
   constructor()
   {
       this.passWordResult = document.getElementById('result');
       this.errresult = document.getElementById('resultError');
   }



//  generatePassword
getPassword(data)
{
    this.passWordResult.innerHTML = `Generated Password : ${data}`;
}
// wiki related 
getCountry(data)
{
    console.log(data);
}  
showError(msg)
{
    this.errresult.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },1000);

}



}