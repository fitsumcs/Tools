class CountryUI
{
   constructor()
   {
   this.cityresult = document.getElementById('cityresultError');
    //    Wiki related 
    this.countryId = document.getElementById('countryId');
      //    Country  related 
    this.countryInfo = document.getElementById('countryInfo');
     


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
   paintCountryDetail(flag,data)
        {
            
        if(data.status!=='success')
        {
            //    console.log(data);
            this.showError(this.cityresult,"There are some errors on server...");
        }
        else
        {
            this.countryInfo.innerHTML = `<div class= "card card-body mb-3">
            <div class="row">  
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${flag}">
                </div>
                <div class="col-md-9">
                    <ul class="list-group">
                    <li class="list-group-item "><b>Country  Name :</b> ${data.name}</li>
                    <li class="list-group-item "><b>Capital City : </b>${data.capital}</li>
                    <li class="list-group-item "><b>Area Size: </b>${data.area_size}</li>
                    <li class="list-group-item "><b>Polpulation: </b>${data.population}</li>
                    <li class="list-group-item "><b>Languages: </b>${Object.values(data.languages)}</li>
                    <li class="list-group-item "><b>Currency: </b>${data.currency.name}</li>
                    <li class="list-group-item "><b>Phone Code: </b>${data.phone_code}</li>
                    <li class="list-group-item "><b>Time Zone: </b>${data.timezone.timezone}</li>
                    <li class="list-group-item "><b>Continent: </b>${data.continent.name}</li>
                    </ul>
                </div>
              
            </div>
        </div>
            
            `;
            
        }
            
        } 
    paintCountryFlag(data)
    {
            return data.flag;
    }
   showError(place,msg)
    {
        place.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);

    }
}