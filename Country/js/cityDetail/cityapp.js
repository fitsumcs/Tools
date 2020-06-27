const apiAll = new CountryAPI();
const allUi = new CountryUI();
// some plces on the html
const cityresult = document.getElementById('getCountryInfo');
// Event Listeners
// document.querySelector('#getWiki').addEventListener('submit',getCountryInfo);
document.addEventListener('DOMContentLoaded',appendData);
// Generate wiki page 
// function getCountryInfo(e)
// {
//     // data from UI
//     const countryId = document.getElementById('countryId').value;
 
    
//      if(countryId.length ===0)
//      {
//         // allUi.showError(wikierrresult,"Enter the Country Name!!");
//         console.log('Inpout Data')
//      }
//     else
//     {
        
//         apiAll.getCountryWiki(countryName).then(data=>{

//             // allUi.getCountry(data);
//             console.log(data);
            
            
     
//          });
//     }
    
//     // prevent 
//     e.preventDefault();
// }
function appendData()
{
            apiAll.getCountriesList().then(data=>{

            // allUi.getCountry(data);
            // console.log(data.countries);
            allUi.addtoList(data.countries)
            
         });
    }
