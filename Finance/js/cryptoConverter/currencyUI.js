class CurrencyUI
{
   constructor()
   {

    this.currencyFrom = document.getElementById('currencyFrom');
    this.currencyTo = document.getElementById('currencyTo');
    this.resultDetail = document.getElementById('resultDetail');
    this.currencyresult=document.querySelector('#currencyresult');
     


   }
//    Flat Mont 
flatMony(data1)
{
    // console.log(data);
    data1.forEach(element => {
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
   showError(place,msg)
   {
       place.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
       setTimeout(()=>{
           document.querySelector('.alert').remove();
       },2000);

   }



//    display 
   // wiki related 
   displayResult(data)
        {
            
        // if(data.status!=='success')
        // {
        //     //    console.log(data);
        //     this.showError(this.currencyresult,"There are some errors on values...");
        // }
        // else
        // {
            this.resultDetail.innerHTML = `<div class= "card card-body mb-3">
            <div class="row">  
                <div class="col-md-12">
                    <ul class="list-group">
                    <li class="list-group-item "><b>Request Date :</b> ${data.request_date}</li>
                    <li class="list-group-item "><b>From : </b>${data.from_name}</li>
                    <li class="list-group-item "><b>To: </b>${data.to_name}</li>
                    <li class="list-group-item "><b>Amount: </b>${data.from_quantity}</li>
                    <li class="list-group-item "><b>Result: </b>${data.to_quantity} ${data.to_symbol}</li>
                    </ul>
                </div>
              
            </div>
        </div>
            
            `;
            
        // }
            
        } 


}