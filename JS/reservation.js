function reserve(id) {
    var resource = JSON.parse(localStorage.getItem(id));

    if (resource.available == 0) {
        alert('Recurso indisponível!')
    }
    else {
        localStorage.setItem('toReserve', JSON.stringify(id));
        if (id > 100) 
            window.location.href = '../HTML/reserve_room.html';
        else 
            window.location.href = '../HTML/reserve_printer.html';
        }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


function makeReservation() {
    var email = document.getElementById('email');
    var resource = JSON.parse(window.localStorage.getItem('toReserve'));

    // Check if email is valid
    if (email && email.value) {
        if (validateEmail(email.value)) {
            // Get user's resources and append new resource
            var existingEntries = JSON.parse(localStorage.getItem(localStorage.getItem('loggedUser')));

            // If user doesn't have resources yet, create new array
            if(existingEntries == null) existingEntries = [];
            
            var entry = resource;
            localStorage.setItem("entry", JSON.stringify(entry));

            // Save all resources back to local storage
            existingEntries.push(entry);
            localStorage.setItem(localStorage.getItem('loggedUser'), JSON.stringify(existingEntries));

            // add user to the resource
            window.localStorage.setItem(resource, JSON.stringify({'user' : email.value, 'available' : 0}));
            window.location.href = '../HTML/temperature.html';
        }
        else 
            alert('Email inválido!');
    }
    else 
        alert('Insira o email!');
}