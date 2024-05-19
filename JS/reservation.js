function reserve(id) {
    var resource = JSON.parse(localStorage.getItem(id));

    if (resource.available == 0) {
        alert('Recurso indisponível!')
    }
    else {
        localStorage.setItem('toReserve', id);
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

    if (email && email.value) {
        if (validateEmail(email.value)) {
            window.localStorage.setItem(resource, JSON.stringify({'user' : email, 'available' : 0}))
            console.log(localStorage.getItem(resource));
        }
        else 
            alert('Email inválido!');
    }
    else 
        alert('Insira o email!');
}