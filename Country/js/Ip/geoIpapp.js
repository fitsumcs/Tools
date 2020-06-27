const apiAll = new WikiAPI();
const allUi = new WikiUI();
// some plces on the html
const wikierrresult = document.getElementById('wikiresultError');
// Event Listener
document.querySelector('#getWiki').addEventListener('submit',generateWikiPage);
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