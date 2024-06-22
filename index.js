const apiUrl = 'https://codeguru.isaac0yen.com/api/users/register';
const apiKey = 'Moses';


const submitNewUser = () => {

const name = document.getElementById('username').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value

    const userData = {
        name,
        password,
        email,
      };
    console.log(userData)
    fetch(apiUrl, {
      method: 'POST', // or 'POST', 'PUT', etc. depending on the endpoint
      headers: {
        'Content-Type': 'application/json',
        // 'accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => console.log('Success',data))
    .catch(error => console.error('Error:', error));
}