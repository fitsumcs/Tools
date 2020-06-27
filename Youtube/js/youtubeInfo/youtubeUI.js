class WikiUI
{
   constructor()
   {
       this.passWordResult = document.getElementById('result');
    //    Wiki related 
        this.countryName = document.getElementById('countryName2');
        this.countryCode = document.getElementById('countryCode');
        this.countryContinet = document.getElementById('countryContinet');
        this.countryWikiLink = document.getElementById('countryWikiLink');
        this.wikierrresult = document.getElementById('wikiresultError');


   }
   // wiki related 
    getCountry(data)
        {
            
        if(data.isError)
        {
            //    console.log(data);
            this.showError(this.wikierrresult,data.errorMessage);
        }
        else
        {
            this.countryName.innerHTML = `<b>Country Name : </b>${data.results[0].name}`;
            this.countryCode.innerHTML = `<b>Country Code : </b>${data.results[0].code}`;
            this.countryContinet.innerHTML = `<b>Country Continet : </b>${data.lookup.continents[data.results[0].continent]}`;
            this.countryWikiLink.innerHTML =`<b>Wikipidia Link : </b><a href=${data.results[0].wikipedia} target='blank'>Link</a>`;
        }
            
        } 
   showError(place,msg)
    {
        place.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);

    }
}