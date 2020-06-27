class GeoAPI
{
  constructor()
  {
  
  }
// get geo
async getGeo(query)
{
   
  
   const response = await fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${query}`, {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   })
   const data = await response.json();

   return data;


}
}