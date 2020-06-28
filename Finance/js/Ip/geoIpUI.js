class GeoUI
{
   constructor()
   {
 
          // Geo Relatd
          this.georesultError = document.getElementById('georesultError');
          this.gCountry = document.getElementById('Gcountry');
          this.gCity = document.getElementById('Gcity');
          this.Longituid = document.getElementById('Longituid');
          this.Latitued = document.getElementById('Latitued');
          this.gIsp = document.getElementById('GIsp');


   }
  //Geo Related
getLongLatdata(data)
{
    if(!data.success)
    {
  this.showError(this.georesultError,data.message);
    }
    else
    {
        this.gIsp.innerHTML = `<b>ISP : </b>${data.isp}`;
        this.gCountry.innerHTML = `<b>Country : </b>${data.country}`;
        this.gCity.innerHTML = `<b>City : </b>${data.city}`;
        this.Longituid.innerHTML = `<b>Longitude : </b>${data.longitude}`;
        this.Latitued.innerHTML = `<b>Latitude : </b>${data.latitude}`;
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