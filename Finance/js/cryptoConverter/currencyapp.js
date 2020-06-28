const apiAll = new CurrencyAPI();
const allUi = new CurrencyUI();

// Event Listeners
// document.querySelector('#getCountryInfo').addEventListener('submit',getCountryInfo);
document.addEventListener('DOMContentLoaded',LoadCurrency);
// Generate wiki page 
// function getCountryInfo(e)
// {
//     // data from UI
//     const countryId = document.getElementById('countryId').value;
 
    
//      if(countryId.length ===0)
//      {
//         allUi.showError(cityresult,"Select the Country Name!!");
//      }
//     else
//     {
        
        
//         apiAll.getCountryDetail(countryId).then(data=>{

//             allUi.paintCountryDetail(data);
            
//          });
//     }
    
//     // prevent 
//     e.preventDefault();
// }
function LoadCurrency()
{
    apiAll.getCurrencySymbols().then(d=>
        {
            allUi.fromCurrency(d.data1.digital_currencies);
            allUi.flatMony(d.data2.fiat_currencies);
            // console.log(d.data2.fiat_currencies)
            
         });

   
}
