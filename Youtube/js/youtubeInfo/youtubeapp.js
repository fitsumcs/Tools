const vapiAll = new YoutubeAPI();
const vallUi = new YoutubeUI();
// some plces on the html
const vedioresultError = document.getElementById('vedioresultError');
// Event Listener
document.querySelector('#getVedioInfo').addEventListener('submit',getVedioInfo);

// get getVedioInfo
function getVedioInfo(ev)
{
    
    // data from UI
    const vedioURL = document.getElementById('vedioURL').value;
 
    
     if(vedioURL.length ===0)
     {
        vallUi.showError(vedioresultError,"Enter Vedio URL!!");
         console.log('Hey there ,,')
     }
    else
    {
        
        vapiAll.getVedio(vedioURL).then(data=>{

            vallUi.geVedioInformation(data);
            
     
         })
    }
    
    // prevent 
    ev.preventDefault();
}