class PasswordAPI
{
  constructor()
  {
  
  }

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

}