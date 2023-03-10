const loginFormHandler = async (event) => {
  event.preventDefault();


  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      console.log('Login.js line 18 --> Response Okay');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};




var loginForm = document.querySelector('.login-form');
if(loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}


