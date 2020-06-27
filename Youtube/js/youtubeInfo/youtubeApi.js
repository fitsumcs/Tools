class YoutubeAPI
{
  constructor()
  {
  
  }
// get Vedio Info
async getVedio(url)
{
   
  
   const response = await fetch(`https://youtube-video-info1.p.rapidapi.com/youtube-info/?url=${url}`, {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "youtube-video-info1.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   })
   const data = await response.json();

   return data;


}
}