class CurrencyUI
{
   constructor()
   {

    this.currencyFrom = document.getElementById('currencyFrom');
    this.currencyTo = document.getElementById('currencyTo');
   
     


   }
//    Flat Mont 
flatMony(data)
{
    // console.log(data);
    data.forEach(element => {
        for (const key in element) {
                   if (element.hasOwnProperty(key)) {
                    
                    this.currencyTo.innerHTML += `<option value=${key}>${element[key]}</option>`;
                   
                   }
               }});
}
//    Digital Mony
   fromCurrency(data)
   {
    data.forEach(element => {
        
        for (const key in element) {
                   if (element.hasOwnProperty(key)) {
                    
                    this.currencyFrom.innerHTML += `<option value=${key}>${element[key]}</option>`;
                    
                   }
               }});

    
   }


}