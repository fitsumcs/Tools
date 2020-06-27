class CountryAPI
{
  constructor()
  {
  
  }
  // get wiki 
async getCountriesList()
{
   
  
   const response = await fetch("https://countries-cities.p.rapidapi.com/location/country/list?format=json", {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "countries-cities.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   })
   const data = await response.json();

   return data;


}
// get detail 
async getCountryDetail(Id)
{
   
  
   const response = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${Id}?format=json`, {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "countries-cities.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   })
   const data = await response.json();

   return data;


}
}