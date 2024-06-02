function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Register a new user
function register() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');

  if (email) { // Check email field
    email = email.value;
    if (validateEmail(email)) { // Check if email is valid
      if (localStorage.getItem(email) == null) { // See if user already exists
        if (password) { // See if password is provided
          // Store user info (In a real application, never store passwords in plain text)
          localStorage.setItem(email, password.value);
          localStorage.setItem('loggedUser', email);
          window.location.href = "menu.html";
        } else { alert('Password inválida!'); }
      } else { alert('Usuário já existe!'); }
    } else { alert('E-mail inválido!'); }
  } else { alert('Insira o e-mail!'); }
}