const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const LoginButton = document.getElementById('login-form-submit');
const gilang = document.getElementById('footer');

LoginButton.addEventListener('click', function (e) {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == 'Karshanda16' &&  password == 'gilanginaja'){
        alert (
        'Login Succes, Next For Redirect.'
        );
        window.location = './home/home.html';
    }
    else {
        loginMessage.style.display = 'inline-block';
        footer.style.marginTop = '-2.2em';
    }
})