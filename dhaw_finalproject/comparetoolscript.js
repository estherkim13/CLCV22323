
let tragedy="tragedy not selected";

// function getTragedy(){
//     const selectedTragedy = document.getElementById("tragedy-options");
//     const displaySelectedTragedy = document.getElementById("selected-tragedy");
//     selectedTragedy.addEventListener("change", (event) => {
//       //display what you selected
//       displaySelectedTragedy.textContent = `You selected: ${event.target.value}`;
//       document.getElementById("choose-tragedies").textContent = displaySelectedTragedy.textContent;
//       //change the name of options for later
//       if (event.target.value == "eur-medea") {
//         tragedy = "eur-medea";
//       } else if (event.target.value == "eur-hippolytus") {
//         tragedy = "eur-hippolytus";
//       }
//     });
//     console.log("function triggered")
// }

//THIS FUNCTION WORKS AS OF 11.29.23 12:21PM HOORAYYYYY
function getTragedy() {
    const displaySelectedTragedy = document.getElementById("selected-tragedy");
    // Triggered when the select dropdown changes
    document.getElementById("tragedy-options").addEventListener("change", (event) => {
      // Display what was selected
      displaySelectedTragedy.textContent = `You selected: ${event.target.value}`;
      document.getElementById("choose-tragedies").textContent = displaySelectedTragedy.textContent;
      // Change the value of tragedy based on selection
      tragedy==event.target.value;
    });
    // CODE TO CHANGE INNERHTML OF THE TRANSLATION OPTIONS
    // const trans1choices = document.getElementById("pick-translation-1");
    // trans1choices.value.innerHTML = "Medea translation 1";
    // look  at this link  https://alvarotrigo.com/blog/javascript-select-option/
  }

function getTranslation1(){
    const selectElement = document.getElementById('pick-translation-1');
    let displaySelected = document.getElementById('selected-translation-1');
    let translation1 = ""
    selectElement.addEventListener('change', (event) => {
    displaySelected.textContent = `You selected: ${event.target.value}`;
    translation1 = `${event.target.value}`;

    //change the PDF on iframe
    let url = fetchPlay(translation1);
    // const timestampedURL = url + 'edited';
    // displaySelected.textContent=`${timestampedURL}`; // Check the generated URL in the console
    document.getElementById('transPDF1').src = url;
    });
    

}

function getTranslation2(){
    const selectElement = document.getElementById('pick-translation-2');
    let displaySelected = document.getElementById('selected-translation-2');
    let translation2 = "";
    selectElement.addEventListener('change', (event) => {
    displaySelected.textContent = `You selected: ${event.target.value}`;
    translation2 =`${event.target.value}`;

     
    //change the PDF on iframe
    let url = fetchPlay(translation2);
    // const timestampedURL = url + 'edited';
    // displaySelected.textContent=`${timestampedURL}`; // Check the generated URL in the console
    document.getElementById('transPDF2').src = url;
    });
   
}

function updateTragedySelection(){
    $(document).ready(function() {
            // jQuery to change options for translation 1 section 
        var showTranslation1 = $("[name=showTranslation1] option").detach()
        $("[name=tragedy]").change(function() {
        var val = $(this).val()
        $("[name=showTranslation1] option").detach()
        showTranslation1.filter("." + val).clone().appendTo("[name=showTranslation1]")
        }).change()
    });

    $(document).ready(function() {
            // jQuery to change options for translation 2 section 
    var showTranslation2 = $("[name=showTranslation2] option").detach()
    $("[name=tragedy]").change(function() {
    var val = $(this).val()
    $("[name=showTranslation2] option").detach()
    showTranslation2.filter("." + val).clone().appendTo("[name=showTranslation2]")
    }).change()
});
}
let playList = [
    ['eur-medea', 'eur-med-michael-collier','/tragedies/euripides_medea_trans_michael_collier.pdf'],
    ['eur-medea', 'eur-med-diane-svarlien','/tragedies/euripides_medea_trans_diane_svarlien.pdf'],
    
];
function fetchPlay(translation){
    for(var i = 0; i<playList.length; i++){
        if(playList[i][1]==translation){
            return playList[i][2];
        }
    }
    return null;
}



function fetchPlayPDF(play){

}