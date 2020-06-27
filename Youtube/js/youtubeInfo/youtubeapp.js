const apiAll = new YoutubeAPI();
const allUi = new YoutubeUI();
// some plces on the html
const vedioresultError = document.getElementById('vedioresultError');
// Event Listener
document.querySelector('#getVedioInfo').addEventListener('submit',getVedioInfo);

// get getVedioInfo
function getVedioInfo(e)
{
    // data from UI
    const vedioURL = document.getElementById('vedioURL').value;
 
    
     if(vedioURL.length ===0)
     {
        allUi.showError(vedioresultError,"Enter Vedio URL!!");
     }
    else
    {
        
        apiAll.getVedio(vedioURL).then(data=>{

            allUi.geVedioInformation(data);
            // console.log(data)
     
         })
    }
    
    // prevent 
    e.preventDefault();
}