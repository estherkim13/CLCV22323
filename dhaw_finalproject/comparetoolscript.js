
let tragedy="";

let playList = [
    //new list euripides, alphabetically from here
        ['eur-alcestis', 'eur-alcestis-richmond-lattimore','/tragedies/euripides_alcestis_trans_richmond_lattimore.pdf'],
        ['eur-alcestis', 'eur-alcestis-theodore-buckley','/tragedies/euripides_alcestis_trans_theodore_buckley.pdf'],
        ['eur-andromache', 'eur-andromache-deborah-roberts','/tragedies/euripides_andromache_trans_deborah_roberts.pdf'],
        ['eur-andromache', 'eur-andromache-edward-coleridge','/tragedies/euripides_andromache_trans_edward_coleridge.pdf'],
        ['eur-the-bacchae', 'eur-the-bacchae-theodore-buckley','/tragedies/euripides_bacchae_trans_theodore_buckley.pdf'],
        ['eur-the-bacchae', 'eur-the-bacchae-william-arrowsmith','/tragedies/euripides_bacchae_trans_william_arrowsmith.pdf'],
        ['eur-cyclops', 'eur-cyclops-edward-coleridge','/tragedies/euripides_cyclops_trans_edward_coleridge.pdf'],
        ['eur-cyclops', 'eur-cyclops-william-arrowsmith','/tragedies/euripides_cyclops_trans_william_arrowsmith.pdf'],
        ['eur-electra', 'eur-electra-emily-vermeule','/tragedies/euripides_electra_trans_emily_vermeule.pdf'],
        ['eur-electra', 'eur-electra-gilbert-murray','/tragedies/euripides_electra_trans_gilbert_murray.pdf'],
        ['eur-hecuba', 'eur-hecuba-theodore-buckley','/tragedies/euripides_hecuba_trans_theodore_buckley.pdf'],
        ['eur-hecuba', 'eur-hecuba-willaim-arrowsmith','/tragedies/euripides_hecuba_trans_william_arrowsmith.pdf'],
        ['eur-helen', 'eur-helen-edward-coleridge','/tragedies/euripides_helen_trans_edward_coleridge.pdf'],
        ['eur-helen', 'eur-helen-richmond-lattimore','/tragedies/euripides_helen_trans_richmond_lattimore.pdf'],
        ['eur-heracleidae', 'eur-heracleidae-mark-griffith','/tragedies/euripides_heracleidae_trans_mark_griffith.pdf'],
        ['eur-heracleidae', 'eur-heracleidae-theodore-buckley','/tragedies/euripides_heracleidae_trans_theodore_buckley.pdf'],
        ['eur-heracles', 'eur-heracles-edward-coleridge','/tragedies/euripides_heracles_trans_edward_coleridge.pdf'],
        ['eur-heracles', 'eur-heracles-michael-halleran','/tragedies/euripides_heracles_trans_michael_halleran.pdf'],
        ['eur-hippolytus', 'eur-hippolytus-david-grene','/tragedies/euripides_hippolytus_trans_david_grene.pdf'],
        ['eur-hippolytus', 'eur-hippolytus-theodore-buckley','/tragedies/euripides_hippolytus_trans_theodore_buckley.pdf'],
        ['eur-ion', 'eur-ion-robert-potter','/tragedies/euripides_ion_trans_robert_potter.pdf'],
        ['eur-ion', 'eur-ion-ronald-willets','/tragedies/euripides_ion_trans_ronald_willets.pdf'],
        ['eur-iphigenia-in-aulis', 'eur-iphigenia-in-aulis-charles-walker','/tragedies/euripides_iphigenia_in_aulis_trans_charles_walker.pdf'],
        ['eur-iphigenia-in-aulis', 'eur-iphigenia-in-aulis-theodore-buckley','/tragedies/euripides_iphigenia_in_aulis_trans_theodore_buckley.pdf'],
        ['eur-iphigenia-in-tauris', 'eur-iphigenia-in-tauris-anne-carson','/tragedies/euripides_iphigenia_in_tauris_trans_anne_carson.pdf'],
        ['eur-iphigenia-in-tauris', 'eur-iphigenia-in-tauris-theodore-buckley','/tragedies/euripides_iphigenia_in_tauris_trans_theodore_buckley.pdf'],
        ['eur-medea', 'eur-medea-diane-svarlien','/tragedies/euripides_medea_trans_diane_svarlien.pdf'],
        ['eur-medea', 'eur-medea-oliver-taplin','/tragedies/euripides_medea_trans_oliver_taplin.pdf'],
        ['eur-medea', 'eur-med-theodore-buckley','/tragedies/euripides_medea_trans_theodore_buckley.pdf'],
        ['eur-medea', 'eur-med-michael-collier','/tragedies/euripides_medea_trans_michael_collier.pdf'],
        ['eur-orestes', 'eur-orestes-william-arrowsmith','/tragedies/euripides_orestes_trans_william_arrowsmith.pdf'],
        ['eur-orestes', 'eur-orestes-theodore-buckley','/tragedies/euripides_orestes_trans_theodore_buckley.pdf'],
        ['eur-rhesus', 'eur-rhesus-gilbert-murray','/tragedies/euripides_rhesus_trans_gilbert_murray.pdf'],
        ['eur-rhesus', 'eur-rhesus-richmond-lattimore','/tragedies/euripides_rhesus_trans_richmond_lattimore.pdf'],
        ['eur-suppliants', 'eur-suppliants-edward-coleridge','/tragedies/euripides_suppliants_trans_edward_coleridge.pdf'],
        ['eur-suppliants', 'eur-suppliants-frank-jones','/tragedies/euripides_suppliants_trans_frank_jones.pdf'],
        ['eur-the-phoenician-women', 'eur-the-phoenician-women-elizabeth-wyckoff','/tragedies/euripides_the_phoenician_women_trans_elizabeth_wyckoff.pdf'],
        ['eur-the-phoenician-women', 'eur-the-phoenician-women-theodore-buckley','/tragedies/euripides_the_phoenician_women_trans_theodore_buckley.pdf'],
        ['eur-the-trojan-women', 'eur-the-trojan-women-gilbert-murray','/tragedies/euripides_the_trojan_women_trans_gilbert_murray.pdf'],
        ['eur-the-trojan-women', 'eur-the-trojan-women-richmond-lattimore','/tragedies/euripides_the_trojan_women_trans_richmond_lattimore.pdf'],
    ];
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
    tragedy=`${event.target.value}`;
    //change the PDF on iframe
    let url = fetchDefaultPlay(tragedy);
    // const timestampedURL = url + 'edited';
    // displaySelected.textContent=`${timestampedURL}`; // Check the generated URL in the console
    document.getElementById('transPDF1').src = url;
    document.getElementById('transPDF2').src = url;

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
    selectElement.addEventListener('change',(event) => {
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
        //update PDF
        let url = fetchDefaultPlay(tragedy);
        const timestampedURL = url + 'edited';
        displaySelected.textContent=`${timestampedURL}`; // Check the generated URL in the console
        document.getElementById('transPDF1').src = url;
    });

    $(document).ready(function() {
            // jQuery to change options for translation 2 section 
    var showTranslation2 = $("[name=showTranslation2] option").detach()
    $("[name=tragedy]").change(function() {
    var val = $(this).val()
    $("[name=showTranslation2] option").detach()
    showTranslation2.filter("." + val).clone().appendTo("[name=showTranslation2]")
    }).change()
    //update PDF
    let url = fetchDefaultPlay(tragedy);
    const timestampedURL = url + 'edited';
    displaySelected.textContent=`${timestampedURL}`; // Check the generated URL in the console
    document.getElementById('transPDF2').src = url;
});
}
function fetchPlay(translation){
    for(var i = 0; i<playList.length; i++){
        if(playList[i][1]==translation){
            return playList[i][2];
        }
    }
    return null;
}

function fetchDefaultPlay(tragedy){
    for(var i = 0; i<playList.length; i++){
        if(playList[i][0]==tragedy){
            return playList[i][2];
        }
    }
    return null;
}
