var element_unordered_list = document.getElementById("liste")

function skrivtilboks(selectobj){
 var e_realmadrid = document.getElementById("realmadrid");
 var e_skrivtilboks = document.getElementById("skrivtilboks");
 e_skrivtilboks.innerHTML = "Du har selektert programmeringsspråket " + e_realmadrid.options[selectobj.selectedIndex].text;
}


function popupboks(beskjed){
	alert("På grunn av min økonomiske situasjon, stopper det her! - Pål")
}