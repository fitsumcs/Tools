class API
{
  constructor()
  {
  
  }


//   
async getPassword(url)
{
   
  
   const response = await fetch(url,
    {
        "method": "GET",    
	"headers": {
		"x-rapidapi-host": "password-generator.p.rapidapi.com",
		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
	}
})
   const data = await response.text();

   return data;


}
// get wiki 
async getCountryWiki(query)
{
   
  
   const response = await fetch(`https://ourairport-data-search.p.rapidapi.com/country/${query}`,
    {
        "method": "GET",    
	"headers": {
		"x-rapidapi-host": "ourairport-data-search.p.rapidapi.com",
		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
	}
})
   const data = await response.json();

   return data;


}

}