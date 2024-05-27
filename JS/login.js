

//  Implement login system and add to localstorage the logged user
function openLogin() {
    // Remove register button
    document.getElementById('register').remove();
    document.getElementById('blackbox').remove();
    document.getElementById('registerRedirect').remove();

    // Adjust text div
    document.getElementById('text').style.height = "150px";

    document.getElementById('loginButton').style.bottom = "10px";
    document.getElementById('loginButton').style.marginTop = "20px";

    document.getElementById('loginButton').innerHTML = "<!--Email--> " + 
    ' <input id="email" style=" border-radius : 10px; border-color : black; border : 2px; border-style : solid; background-color : transparent; left: 25px; bottom : 85px; position: absolute; color: rgba(0, 0, 0, 0.50); font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 800; word-wrap: break-word" placeholder="E-mail"> ' +    
    ' <!--Password--> ' +
        ' <input id= "passwordInput" style=" bottom : 25px; border-radius : 10px; border-color : black; border : 2px; border-style : solid; background-color: transparent; left: 25px; position: absolute; color: rgba(0, 0, 0, 0.50); font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 800; word-wrap: break-word" placeholder="Password"> '+
        ' <h2 onclick="login()" style="border-color: black; border-style: solid; height : 40px; background-color : #212121; border-radius : 10px; left: 25px; margin-top : 50px; color: #EFE2C2; font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold; word-wrap: break-word" center>Login</h2>' + 
        ' <div style="width: 145px; height: 17px; text-align: right; color: black; font-size: 12px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold; word-wrap: break-word">Não tens conta? <a href="register.html" ' + 
        ' style=" position : absolute; margin-left : 5px; margin-bottom : 5px; text-align: center; color: black; font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 400; text-decoration: underline; word-wrap: break-word">Registar conta</a></div>';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function login() {
    var email = document.getElementById('email');
    // Check email field
    if (email && email.value) { 
        // Check if email is valid
        if (validateEmail(email.value)) {
            // See if user exists
            if (localStorage.getItem(email) != null) {
                var password = document.getElementById('passwordInput').value;
                // See if password matches
                if (JSON.parse(localStorage.getItem(email) == password )) {
                    localStorage.setItem('loggedUser', JSON.stringify(email));
                    window.location.href = "menu.html";
                } else {
                    alert('Password errada!');
                }
            } else {
                alert('Usuário não existe!');
            }
        } else {
            alert('E-mail inválido!')
        }

    } else {
        alert('Insira o e-mail.')
    }
}
