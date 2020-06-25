
const apiAll = new API();
const allUi = new UI();
// some plces on the html
const wikierrresult = document.getElementById('wikiresultError');
const geoerrresult = document.getElementById('georesultError');

// Event Listener
document.querySelector('#generatePassword').addEventListener('submit',generatePassword);
document.querySelector('#getWiki').addEventListener('submit',generateWikiPage);
document.querySelector('#getGeoLocation').addEventListener('submit',getGeoLocation);
// Generate Pass
function generatePassword(e)
{
    // data from UI
    let query ='' ;
    let url = 'https://password-generator.p.rapidapi.com/v1/password?';
    const symbol = document.getElementById('symbol').value;
    const uppercase = document.getElementById('uppercase').value;
    const lowercase = document.getElementById('lowercase').value;
    const cnumber = document.getElementById('cnumber').value;
    const plengeth = document.getElementById('plengeth').value;
    
     if(Number(symbol) >= 0 && symbol.length !=0)
     {
         query+=`Symbols=${symbol}`;
     }
     if(Number(uppercase) >= 0 && uppercase.length !=0)
     {
         query+=`&Uppercase=${uppercase}`  ;
     }
     if(Number(lowercase) >= 0 && lowercase.length !=0)
     {
         query +=`&Lowercase=${lowercase}`;
     }
     if(Number(cnumber) >= 0 && cnumber.length !=0)
     {
         query+=`&Numbers=${cnumber}` ;
     }
     if(Number(plengeth) >= 0 && plengeth.length !=0)
     {
         query+=`&Length=${plengeth}` ;
     }
     if(query)
     {
        url = `https://password-generator.p.rapidapi.com/v1/password?${query}`;
        console.log(query)
        console.log(url)
     }
   
    // query= `Symbols=0&Uppercase=1&Length=${plengeth}&Numbers=1&Lowercase=1`;

    apiAll.getPassword(url).then(data=>{

       allUi.getPassword(data);

    });
    // prevent 
    e.preventDefault();
}


// Generate wiki page 
function generateWikiPage(e)
{
    // data from UI
    const countryName = document.getElementById('countryName').value;
 
    
     if(countryName.length ===0)
     {
        allUi.showError(wikierrresult,"Enter the Country Name!!");
     }
    else
    {
        
        apiAll.getCountryWiki(countryName).then(data=>{

            allUi.getCountry(data);
            
            
     
         });
    }
    
    // prevent 
    e.preventDefault();
}


// get Geo Location
function getGeoLocation(e)
{
    // data from UI
    const ipAdress = document.getElementById('ipAdress').value;
 
    
     if(ipAdress.length ===0)
     {
        allUi.showError(geoerrresult,"Enter Ip Adress!!");
     }
    else
    {
        
        apiAll.getGeo(ipAdress).then(data=>{

        llUi.getLongLatdata(data);
            
     
         });
    }
    
    // prevent 
    e.preventDefault();
}