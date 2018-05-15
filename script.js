function Tarkasta() {

var etunimi = document.forms["lomake"]["etunimi"]; 
var sukunimi = document.forms["lomake"]["sukunimi"];
var osoite = document.forms["lomake"]["osoite"];
var puhelin = document.forms["lomake"]["puhelin"];
var email = document.forms["lomake"]["email"];   

    

    if (etunimi.value == ""){
	window.alert("Ole hyvä, ja anna etunimesi.");
	etunimi.focus();
}
else if (etunimi.value.length <= 2) {
    window.alert("Etunimi minimissään 3 kirjainta");
    return false;
    }


    if (sukunimi.value == ""){
	window.alert("Ole hyvä, ja anna sukunimesi.");
	sukunimi.focus();
}
   else if (sukunimi.value.length <= 2){
    window.alert("Sukunimi minimissään 3 kirjainta");
    return false;
    }
    
    if (email.value == "") {
        window.alert("Ole hyvä, ja anna sähköpostisi.");
        sahkoposti.focus();
    }
    if(email.value.indexOf ("@",0)<0){
        window.alert("@-merkki puuttuu");
        return false;
    }
    if (email.value.indexOf(".",0)<0){
        window.alert("piste puuttuu");
        return false;
    }

    
    if (puhelin.value.isNumeric(){
        window.alert("Ole hyvä, ja anna puhelin numero");
        puhelin.focus();
        
    }
    if (puhelin.value.length <=3) {
        window.alert("Puhelin numeron pitää olla vähintään 7 numeroa pitkä")
        return false;
    }
    
    

    
    
    
    
    
    
    
    return true;
}

