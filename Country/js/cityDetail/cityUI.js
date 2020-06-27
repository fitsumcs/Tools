class CountryUI
{
   constructor()
   {
   this.cityresult = document.getElementById('cityresultError');
    //    Wiki related 
    this.countryId = document.getElementById('countryId');
      //    Country  related 
      this.countryName = document.getElementById('countryName2');
      this.countryCode = document.getElementById('countryCode');
      this.countryContinet = document.getElementById('countryContinet');


   }
   addtoList(data)
   {

   for (const key in data) {
       if (data.hasOwnProperty(key)) {
        //    const element = object[key];
           this.countryId .innerHTML += `<option value=${key}>${data[key]}</option>`;
           
       }
   }
    


   }
   // wiki related 
   paintCountryDetail(data)
        {
            
        if(data.status!=='success')
        {
            //    console.log(data);
            this.showError(this.cityresult,"There are some errors on server...");
        }
        else
        {
            this.countryName.innerHTML = `<b>Country Name : </b>${data.name}`;
            this.countryCode.innerHTML = `<b>Country Code : </b>${data.code}`;
            this.countryContinet.innerHTML = `<b>Country Continet : </b>${data.continent.name}`;
            
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