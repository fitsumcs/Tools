class CurrencyAPI
{
  constructor()
  {
  
  }
  // get wiki 
async getCurrencySymbols()
{
   
  
   const response1 = await fetch("https://bravenewcoin-v1.p.rapidapi.com/digital-currency-symbols", {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   });
     // flat 
     const response2 = await fetch("https://bravenewcoin-v1.p.rapidapi.com/fiat-currency-symbols", 
     {
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
         "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
      }
   });

   const data1 = await response1.json();
 
   const data2 = await response2.json();

   return {data1,data2};


}


}