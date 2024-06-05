// Validate email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Make a reservation
function submitTicket() {
    var email = document.getElementById('email');

    if(email) {
        var email = email.value;
        if(validateEmail(email)) {
            document.getElementById('ticket').value = "";
            window.location.reload();
        } else alert('Email inválido!');
    } else alert('Insira o email!');
}