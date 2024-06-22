const loginUrl = 'https://codeguru.isaac0yen.com/api/users/login';
const apiKey = 'loginnewuser';

const loginUser =() =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const userData = {
    email,
    password
    };

    fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => console.log('Login Successful:', data))
    .catch(error => console.error('Error:', error));
}