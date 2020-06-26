class UI
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
        // Geo Relatd
        this.georesultError = document.getElementById('georesultError');
        this.gCountry = document.getElementById('Gcountry');
        this.gCity = document.getElementById('Gcity');
        this.Longituid = document.getElementById('Longituid');
        this.Latitued = document.getElementById('Latitued');
        this.gIsp = document.getElementById('GIsp');

        // Flag Related
        this.flagresultError = document.getElementById('flagresultError');
        this.gLink = document.getElementById('Fcountry');

        // Vedio Related
        this.veidoTitle = document.getElementById('veidoTitle');
        this.veidoCatagory = document.getElementById('veidoCatagory');
        this.veidoFormat = document.getElementById('veidoFormat');
        this.veidoDetail = document.getElementById('veidoDetail');
        this.veidoChannel = document.getElementById('veidoChannel');
        this.veidoUploader = document.getElementById('veidoUploader');
        this.veidoUploadeddate = document.getElementById('veidoUploadeddate');
        this.veidoviewStat = document.getElementById('veidoviewStat');
        
   }



//  generatePassword
getPassword(data)
{
    this.passWordResult.innerHTML = `Generated Password : ${data}`;
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
        this.Longituid.innerHTML = `<b>Longituid : </b>${data.longitude}`;
        this.Latitued.innerHTML = `<b>Latitued : </b>${data.latitude}`;
    }
 

    
} 


//Geo Related
getFlagLink(data)
{
  
      if(data.status ===404)
      {
        this.showError(this.flagresultError,"No Country of that Name");
      }
      else
      {
        this.gLink.innerHTML = `<b>Download Link : </b><a href=${data.flag} target='blank'>Link</a>`;
      }
        
       
    
}

//Vedio Related
geVedioInformation(data)
{
  
      if(data.successfull ===false)
      {
        this.showError(this.vedioresultError,"Vedio Not Found");
      }
      else
      {
        this.veidoTitle.innerHTML = `<b>Vedio Title : </b>${data.info.title} `;
        this.veidoCatagory.innerHTML =`<b>Vedio Catagory : </b>${data.info.categories[0]}`;
        this.veidoFormat.innerHTML = `<b>Vedio Format : </b>${data.info.ext}`;
        this.veidoDetail.innerHTML = `<b>Vedio Height : </b>${data.info.height} ,<b>Vedio Width : </b>${data.info.width}`;
        this.veidoChannel.innerHTML = `<b>Channel Link : </b><a href=${data.info.channel_url} target='blank'>Link</a>`;
        this.veidoUploader.innerHTML = `<b>Uploader : </b><a href=${data.info.uploader_url} target='blank'>${data.info.uploader}</a>`;
        this.veidoUploadeddate.innerHTML = `<b>Uploded Date : </b>${data.info.upload_date}`;
        this.veidoviewStat.innerHTML = `<b>Vedio Stat : </b> Total View : ${data.info.view_count}, Like :${data.info.like_count} , DisLike :${data.info.dislike_count} `;
      }
        
       
    
}




}