// Reserve a resource by ID
function reserve(id) {
    var resource = JSON.parse(localStorage.getItem(id));
    if(resource == null || resource.available == 1) {
        localStorage.setItem('toReserve', JSON.stringify(id));
        if(id > 100) window.location.href = '../HTML/reserve_room.html';
        else window.location.href = '../HTML/reserve_printer.html';
    } else alert('Recurso indisponível!');
}

// Validate email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Make a reservation
function makeReservation() {
    var email = document.getElementById('email');
    var resource = JSON.parse(localStorage.getItem('toReserve'));

    if(email) {
        var email = email.value;
        if(validateEmail(email)) {
            var loggedUser = localStorage.getItem('loggedUser');
            var existingEntries = JSON.parse(localStorage.getItem(loggedUser));

            if(existingEntries == null) existingEntries = [];
            existingEntries.push(resource);
            localStorage.setItem(loggedUser, JSON.stringify(existingEntries));
            localStorage.setItem(resource, JSON.stringify({'user': email, 'available': 0}));

            if(resource > 100) window.location.href = '../HTML/temperature.html';
            else window.location.href = '../HTML/printer.html';
        } else alert('Email inválido!');
    } else alert('Insira o email!');
}

// Get resource name
function getResourceName() {
    var resource = JSON.parse(localStorage.getItem('toReserve'));
    if(resource > 100) return "Sala - " + resource;
    else return "Impressora - " + resource;
}

// End a reservation
function endReservation() {
    var resource = JSON.parse(localStorage.getItem('toReserve'));
    localStorage.setItem(resource, JSON.stringify({ "user": "", "available": 1 }));
    
    var loggedUser = localStorage.getItem('loggedUser');
    var resources = JSON.parse(localStorage.getItem(loggedUser));

    for(var i = 0; i < resources.length; i++) {
        if(resources[i] == resource) {
            resources.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(loggedUser, JSON.stringify(resources));
    window.location.href = '../HTML/resource_access.html';
}