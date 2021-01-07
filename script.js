var validAnrede = false;
var validVorname = false;
var validNachname = false;
var validPLZ = false;
var validStrasse = false;
var validHausnummer = false;
var validEMail = false;
var validPhone = 0;
var validBirthday = false;
var magic_speed_ms = 240;
var magic_delay_ms = 100;

function validatePersonendaten() {
    var validPersonendaten = 0;
    validPersonendaten += validAnrede + validVorname + validNachname + validPLZ + validStrasse + validHausnummer + validBirthday;
    if (validPersonendaten == 7) {
        document.getElementById("fieldset_personendaten").className = "fieldsets_validated";
    } else {
        document.getElementById("fieldset_personendaten").className = "fieldsets";
    }
}

function validateAnrede() {
    var anrede = document.getElementById("stammdaten_anrede").value;
    if (anrede == "") {
        document.getElementById("stammdaten_label_anrede").className = "form_labels";
        if (document.getElementById("stammdaten_anrede_help").hidden) {
            toggleAnredeHilfe();
        }
        validAnrede = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_anrede").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_anrede_help").hidden) {
            toggleAnredeHilfe();
        }
        validAnrede = true;
        validatePersonendaten();
        return true;
    }
}

function toggleAnredeHilfe() {
    return toggleHelp("anrede");
}

function validateVorname() {
    var vorname = document.getElementById("stammdaten_vorname").value;
    if (vorname.length < 2) {
        document.getElementById("stammdaten_label_vorname").className = "form_labels";
        if (document.getElementById("stammdaten_vorname_help").hidden) {
            toggleVornameHilfe();
        }
        validVorname = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_vorname").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_vorname_help").hidden) {
            toggleVornameHilfe();
        }
        validVorname = true;
        validatePersonendaten();
        return true;
    }
}

function toggleVornameHilfe() {
    return toggleHelp("vorname");
}

function validateNachname() {
    var nachname = document.getElementById("stammdaten_nachname").value;
    if (nachname.length < 2) {
        document.getElementById("stammdaten_label_nachname").className = "form_labels";
        if (document.getElementById("stammdaten_nachname_help").hidden) {
            toggleNachnameHilfe();
        }
        validNachname = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_nachname").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_nachname_help").hidden) {
            toggleNachnameHilfe();
        }
        validNachname = true;
        validatePersonendaten();
        return true;
    }
}

function toggleNachnameHilfe() {
    return toggleHelp("nachname");
}

function validatePLZ() {
    var plz = parseInt(document.getElementById("stammdaten_plz").value);
    if (plz > 9999 && plz < 100000) {
        document.getElementById("stammdaten_label_plz").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_plz_help").hidden) {
            togglePLZHilfe();
        }
        validPLZ = true;
        validatePersonendaten();
        return true;
    } else {
        document.getElementById("stammdaten_label_plz").className = "form_labels";
        if (document.getElementById("stammdaten_plz_help").hidden) {
            togglePLZHilfe();
        }
        validPLZ = false;
        validatePersonendaten();
        return false;
    }
}

function togglePLZHilfe() {
    return toggleHelp("plz");
}

function validateStrasse() {
    var strasse = document.getElementById("stammdaten_strasse").value;
    if (strasse.length < 1) {
        document.getElementById("stammdaten_label_strasse").className = "form_labels";
        if (document.getElementById("stammdaten_strasse_help").hidden) {
            toggleStrasseHilfe();
        }
        validStrasse = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_strasse").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_strasse_help").hidden) {
            toggleStrasseHilfe();
        }
        validStrasse = true;
        validatePersonendaten();
        return true;
    }
}

function toggleStrasseHilfe() {
    return toggleHelp("strasse");
}

function validateHausnummer() {
    console.log(document.getElementById("stammdaten_hausnummer").value);
    if (document.getElementById("stammdaten_hausnummer").value == "") {
        document.getElementById("stammdaten_label_hausnummer").className = "form_labels";
        if (document.getElementById("stammdaten_hausnummer_help").hidden) {
            toggleHausnummerHilfe();
        }
        validHausnummer = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_hausnummer").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_hausnummer_help").hidden) {
            toggleHausnummerHilfe();
        }
        validHausnummer = true;
        validatePersonendaten();
        return true;
    }
}

function toggleHausnummerHilfe() {
    return toggleHelp("hausnummer");
}



function validateBirthday() {
    var birthdate = document.getElementById("stammdaten_birthday").value;
    var birthday = new Date(birthdate);
    console.log(birthday.getFullYear());
    if (birthday.getFullYear() > 2003) {
        alert("Kunde scheint nicht volljährig zu sein. Überprüfe Geburtsdatum erneut.")
        validBirthday = false;
        validatePersonendaten();
        return false;
    } else if (birthday.getFullYear() < 1900 || (birthday.getDate() < 1 || birthday.getDate() > 31) || (birthday.getMonth() < 0 || birthday.getMonth() > 11)) {
        document.getElementById("stammdaten_label_birthday").className = "form_labels";
        if (document.getElementById("stammdaten_birthday_help").hidden) {
            toggleBirthdayHilfe();
        }
        validBirthday = false;
        validatePersonendaten();
        return false;
    } else {
        document.getElementById("stammdaten_label_birthday").className = "form_labels_validated";
        if (!document.getElementById("stammdaten_birthday_help").hidden) {
            toggleBirthdayHilfe();
        }
        validBirthday = true;
        validatePersonendaten();        
        return true;
    }
}

function toggleBirthdayHilfe() {
    return toggleHelp("birthday");
}

function toggleHelp(s) {
    if (document.getElementById("stammdaten_" + s + "_help").hidden) {
        console.log("showing help text for: " + s);
        document.getElementById("stammdaten_" + s + "_help").hidden = false;
        document.getElementById("stammdaten_label_" + s).innerHTML = "˄";
        return false;
    } else {
        console.log("hiding help text for: " + s);
        document.getElementById("stammdaten_" + s + "_help").hidden = true;
        document.getElementById("stammdaten_label_" + s).innerHTML = "˅";
        return true;
    }
}

function validateErreichbarkeit() {
    var validErreichbarkeit = 0;
    validErreichbarkeit += validEMail + validPhone;
    if (validErreichbarkeit == 1) {
        document.getElementById("fieldset_erreichbarkeit").className = "fieldsets_validated";
    } else {
        document.getElementById("fieldset_erreichbarkeit").className = "fieldsets";
    }
}

function validateEMail() {
    var mail = document.getElementById("erreichbarkeit_email").value;
    if ( /(.+)@(.+){2,}\.(.+){2,}/.test(mail) == false) {
        document.getElementById("erreichbarkeit_label_email").className = "form_labels";
        if (document.getElementById("erreichbarkeit_email_help").hidden) {
            toggleEMailHilfe();
        }
        validEMail = false;
        validateErreichbarkeit();
        return false;
    } else {
        document.getElementById("erreichbarkeit_label_email").className = "form_labels_validated";
        if (!document.getElementById("erreichbarkeit_email_help").hidden) {
            toggleEMailHilfe();
        }
        validEMail = true;
        validateErreichbarkeit();
        return true;
    }
}

function toggleEMailHilfe() {
    return toggleErreichbarkeitsHelp("email");
}

function validatePhone() {
    var phone = document.getElementById("erreichbarkeit_phone").value;
    if (phone != "" && /^\d+$/.test(phone) == false) {
        document.getElementById("erreichbarkeit_label_phone").className = "form_labels";
        if (document.getElementById("erreichbarkeit_phone_help").hidden) {
            togglePhoneHilfe();
        }
        validPhone = -30;
        validateErreichbarkeit();
        return false;
    } else {
        document.getElementById("erreichbarkeit_label_phone").className = "form_labels_validated";
        if (!document.getElementById("erreichbarkeit_phone_help").hidden) {
            togglePhoneHilfe();
        }
        validPhone = 0;
        validateErreichbarkeit();
        return true;
    }
}

function togglePhoneHilfe() {
    return toggleErreichbarkeitsHelp("phone");
}

function validateRueckruf() {
    //code about reasonable dates
}

function toggleRueckrufHilfe() {
    toggleErreichbarkeitsHelp("rueckruf");
}

function showErreichbarkeitsModus(evt, modus) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(modus).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

function toggleErreichbarkeitsHelp(s) {
    if (document.getElementById("erreichbarkeit_" + s + "_help").hidden) {
        console.log("showing help text for: " + s);
        document.getElementById("erreichbarkeit_" + s + "_help").hidden = false;
        document.getElementById("erreichbarkeit_label_" + s).innerHTML = "˄";
        validateErreichbarkeit();
        return false;
    } else {
        console.log("hiding help text for: " + s);
        document.getElementById("erreichbarkeit_" + s + "_help").hidden = true;
        document.getElementById("erreichbarkeit_label_" + s).innerHTML = "˅";
        //document.getElementById("erreichbarkeit_" + s + "_error").hidden = true;
        return true;
    }
}

function shutEyeContact() {
    setTimeout(function(){
        document.getElementById("stammdaten_anrede").style.backgroundColor = "rgb(105, 105, 105)";
        validateAnrede();
    }, (1 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_vorname").style.backgroundColor = "rgb(105, 105, 105)";
        validateVorname();
    }, (2 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_nachname").style.backgroundColor = "rgb(105, 105, 105)";
        validateNachname();
    }, (3 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_plz").style.backgroundColor = "rgb(105, 105, 105)";
        validatePLZ();
    }, (4 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_strasse").style.backgroundColor = "rgb(105, 105, 105)";
        validateStrasse();
    }, (5 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_hausnummer").style.backgroundColor = "rgb(105, 105, 105)";
        validateHausnummer();
    }, (6 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_birthday").style.backgroundColor = "rgb(105, 105, 105)";
        validateBirthday();
    }, (7 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_email").style.backgroundColor = "rgb(105, 105, 105)";
        validateEMail();
    }, (8 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_phone").style.backgroundColor = "rgb(105, 105, 105)";
        validatePhone();
    }, (9 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_wochentag").style.backgroundColor = "rgb(105, 105, 105)";
        
    }, (10 * magic_speed_ms) + magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_tageszeit").style.backgroundColor = "rgb(105, 105, 105)";
        
    }, (11 * magic_speed_ms) + magic_delay_ms);
}

function eyeContact() {
    shutEyeContact();
    setTimeout(function(){
        document.getElementById("stammdaten_anrede").style.backgroundColor = "white";
        validateAnrede();
    }, (1 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_vorname").style.backgroundColor = "white";
        validateVorname();
    }, (2 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_nachname").style.backgroundColor = "white";
        validateNachname();
    }, (3 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_plz").style.backgroundColor = "white";
        validatePLZ();
    }, (4 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_strasse").style.backgroundColor = "white";
        validateStrasse();
    }, (5 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_hausnummer").style.backgroundColor = "white";
        validateHausnummer();
    }, (6 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("stammdaten_birthday").style.backgroundColor = "white";
        validateBirthday();
    }, (7 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_email").style.backgroundColor = "white";
        validateEMail();
    }, (8 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_phone").style.backgroundColor = "white";
        validatePhone();
    }, (9 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_wochentag").style.backgroundColor = "white";
      
    }, (10 * magic_speed_ms) - magic_delay_ms);
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_tageszeit").style.backgroundColor = "white";

    }, (11 * magic_speed_ms) - magic_delay_ms);
}

function magic() {
    eyeContact();
    setTimeout(function(){
        document.getElementById("stammdaten_anrede").value = "Herr";
        validateAnrede();
    }, (1 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_vorname").value = "Max";
        validateVorname();
    }, (2 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_nachname").value = "Mustermann";
        validateNachname();
    }, (3 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_plz").value = "12345 Musterhausen";
        validatePLZ();
    }, (4 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_strasse").value = "Mustergasse";
        validateStrasse();
    }, (5 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_hausnummer").value = "1a Appartement 2";
        validateHausnummer();
    }, (6 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("stammdaten_birthday").value = "2001-01-01";
        validateBirthday();
    }, (7 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("erreichbarkeit_email").value = "max.mus@iwv-baden.de";
        validateEMail();
    }, (8 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("erreichbarkeit_phone").value = "015256139130";
        validatePhone();
    }, (9 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_wochentag").value = "mittwochs";
        
    }, (10 * magic_speed_ms));
    setTimeout(function(){
        document.getElementById("erreichbarkeit_regel_tageszeit").value = "vormittags";
        
    }, (11 * magic_speed_ms));
    console.log("magic happened...");
}