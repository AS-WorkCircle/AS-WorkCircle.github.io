

//  Implement login system and add to localstorage the logged user
function openLogin() {
    // Remove register button
    document.getElementById('register').remove();
    document.getElementById('blackbox').remove();
    document.getElementById('registerRedirect').remove();

    // Adjust text div
    document.getElementById('text').style.height = "150px";

    document.getElementById('loginButton').style.height = "200px";
    document.getElementById('loginButton').style.marginTop = "20px";

    document.getElementById('loginButton').innerHTML = "<!--Email--> " + 
    ' <input id="email" style="left: 25px; bottom : 220px; position: absolute; color: rgba(0, 0, 0, 0.50); font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 400; word-wrap: break-word" placeholder="E-mail"> ' +    
    ' <!--Password--> ' +
        ' <input id= "password" style="left: 25px; position: absolute; color: rgba(0, 0, 0, 0.50); font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 400; word-wrap: break-word" placeholder="Password"> '+
        ' <h2 style="border-color: black; border-style: solid; height : 40px; background-color : #212121; border-radius : 10px; left: 25px; margin-top : 50px; color: #EFE2C2; font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold; word-wrap: break-word" center>Login</h2>' + 
        ' <div style="width: 145px; height: 17px; text-align: right; color: black; font-size: 12px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold; word-wrap: break-word">Não tens conta? <a href="register.html" ' + 
        ' style=" position : absolute; margin-left : 5px; margin-bottom : 5px; text-align: center; color: black; font-size: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 400; text-decoration: underline; word-wrap: break-word">Registar conta</a></div>';
}

function login() {
    localStorage.setItem('loggedUser', username);
}
