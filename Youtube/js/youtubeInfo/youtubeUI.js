class YoutubeUI
{
   constructor()
   {
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
   ///Vedio Related
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
   showError(place,msg)
    {
        place.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);

    }
}