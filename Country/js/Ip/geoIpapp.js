const apiAll = new GeoAPI();
const allUi = new GeoUI();
// some plces on the html
const geoerrresult = document.getElementById('georesultError');

// Event Listener
document.querySelector('#getGeoLocation').addEventListener('submit',getGeoLocation);
// Generate wiki page 
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

            allUi.getLongLatdata(data);
     
         }).catch(()=>{allUi.showError(geoerrresult,"Cant Find The IP");})
    }
    
    // prevent 
    e.preventDefault();
}