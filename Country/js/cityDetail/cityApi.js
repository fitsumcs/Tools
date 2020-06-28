class CountryAPI
{
  constructor()
  {
  
  }
  // get wiki 
async getCountriesList()
{
   
  
   const response = await fetch("https://countries-cities.p.rapidapi.com/location/country/list?format=json", {
      "mode":"no-cors",   
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
async changeCurrency(amount,fromC,toC)
{
   
  
   const response = await fetch(`https://bravenewcoin-v1.p.rapidapi.com/convert?qty=${amount}}&from=${fromC}&to=${toC}`, {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   })
   const data = await response.json();

   return data;


}
// // get Flag
// async getFlag(query)
// {


//    const response = await fetch(`https://metropolis-api-phone.p.rapidapi.com/flag?country=${query}`, {
//       "method": "GET",
//       "headers": {
//          "x-rapidapi-host": "metropolis-api-phone.p.rapidapi.com",
//          "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
//       }
//    })
//    const data = await response.json();

//    return data;


// }
}