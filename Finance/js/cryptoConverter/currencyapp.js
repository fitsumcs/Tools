const apiAll = new CurrencyAPI();
const allUi = new CurrencyUI();

// Event Listeners
const currencyresult=document.querySelector('#currencyresult');
document.querySelector('#convertCurrency').addEventListener('submit',convertCurrency);
document.addEventListener('DOMContentLoaded',LoadCurrency);
// Convert Currency
function convertCurrency(ev)
{
    // prevent 
    ev.preventDefault();
    // data from UI
    const cFrom = document.getElementById('currencyFrom').value;
    const cTo = document.getElementById('currencyTo').value;
    const cAmount = document.getElementById('amount').value;
    
     if(Number(cAmount) <=0)
     {
        allUi.showError(currencyresult,"Enter amount above zero");
     }
    else
    {
        
        
        apiAll.changeCurrency(cAmount,cFrom,cTo).then(data=>{

            allUi.displayResult(data);
         
            
         });
    }
    
    
}


function LoadCurrency()
{
    apiAll.getCurrencySymbols().then(d=>
        {
            allUi.fromCurrency(d.data1.digital_currencies);
            allUi.flatMony(d.data2.fiat_currencies);
           
            
         });

   
}
