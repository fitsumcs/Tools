const apiAll = new CountryAPI();
const allUi = new CountryUI();
// some plces on the html
const cityresult = document.getElementById('cityresultError');
// Event Listeners
document.querySelector('#getCountryInfo').addEventListener('submit',getCountryInfo);
document.addEventListener('DOMContentLoaded',appendData);
// Generate wiki page 
function getCountryInfo(e)
{
    // data from UI
    const countryId = document.getElementById('countryId').value;
 
    
     if(countryId.length ===0)
     {
        allUi.showError(cityresult,"Select the Country Name!!");
     }
    else
    {
        
        
        apiAll.getCountryDetail(countryId).then(data=>{

            allUi.paintCountryDetail(data);
            
            
            
     
         });
    }
    
    // prevent 
    e.preventDefault();
}
function appendData()
{
            apiAll.getCountriesList().then(data=>{
            allUi.addtoList(data.countries)
            
         });
    }
