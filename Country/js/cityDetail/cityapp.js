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
        
        // console.log(countryId);
        let flag;
       
            // console.log(countryId);
        apiAll.getFlag(countryId).then(data1=>{

            flag = allUi.paintCountryFlag(data1);
            
         });
         apiAll.getCountryDetail(countryId).then(data=>{

            allUi.paintCountryDetail(flag,data);
            
            
            
            
     
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
