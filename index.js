document.getElementById('submit-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 's@gmail.com' && userPassword == 'public') {
        window.location.href = 'banking.html';
    }

    })

    