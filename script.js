function Tarkasta() {
var laheta = document.forms["lomake"]["submit"]
var etunimi = document.forms["lomake"]["etunimi"]; 
var sukunimi = document.forms["lomake"]["sukunimi"];
var osoite = document.forms["lomake"]["osoite"];
var puhelin = document.forms["lomake"]["puhelin"];
var email = document.forms["lomake"]["email"];   
var maa = document.forms["lomake"]["maa"];
    

    if (etunimi.value == ""){
	window.alert("Ole hyvä, ja anna etunimesi.");
	etunimi.focus();
    return false;
}
    else if (etunimi.value.length <= 2) {
    window.alert("Etunimi minimissään 3 kirjainta");
    return false;
    }


    if (sukunimi.value == ""){
	window.alert("Ole hyvä, ja anna sukunimesi.");
	sukunimi.focus();
    return false;
}
    else if (sukunimi.value.length <= 2){
    window.alert("Sukunimi minimissään 3 kirjainta");
    return false;
    }
    
    if (email.value == "") {
    window.alert("Ole hyvä, ja anna sähköpostisi.");
    email.focus();
    return false;
    } 
    
    
    if(email.value.indexOf ("@",0)<0){
        window.alert("@-merkki puuttuu");
        return false;
    } 
    if (email.value.indexOf(".",0)<0){
        window.alert("piste puuttuu");
        return false; 
    }


    if (puhelin.value == "") {
        window.alert("Ole hyvä, ja anna puhelinumerosi");
        puhelin.focus();
        return false;
    }

    if (puhelin.value.match(/\D/g)){
        window.alert("Vain numeroita kiitos");
        puhelin.focus();
        return false;
    }

    else if (puhelin.value.length <= 6){
    window.alert("Puhelinumero minimissään 7 numeroa");
    return false;
    }

    if (osoite.value == "") {
    window.alert("Ole hyvä, ja anna osoitte");
    osoite.focus();
    return false;
    }
    
    if (osoite.value.length <= 9){
        window.alert("Pidempi kuin 10 kirjainta");
        return false;
    }
    
    
    if (maa.value == 000){
        window.alert("Valitse maa");
        maa.focus();
        return false;
    }
    return true;
}

