document.getElementById('createAccountButton').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loginText').style.display = 'none';
    document.getElementById('loginTitle').style.display = 'none';
    document.getElementById('loginList').style.display = 'none';
    document.getElementById('createAccountButton').style.display = 'none';
    document.getElementById('registerText').style.display = 'block';
    document.getElementById('registerTitle').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('signInButton').style.display = 'block';
});

document.getElementById('signInButton').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('signInButton').style.display = 'none';
    document.getElementById('registerText').style.display = 'none';
    document.getElementById('registerTitle').style.display = 'none';
    document.getElementById('loginText').style.display = 'block';
    document.getElementById('loginList').style.display = 'block';
    document.getElementById('loginTitle').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('createAccountButton').style.display = 'block';
});

