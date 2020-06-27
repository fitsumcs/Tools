class PasswordUI
{
    constructor()
    {
        this.passWordResult = document.getElementById('result');
     
    }

//  generatePassword
getPassword(data)
{
    this.passWordResult.innerHTML = `Generated Password : ${data}`;
}

}