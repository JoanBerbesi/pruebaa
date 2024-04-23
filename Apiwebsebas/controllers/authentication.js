import { loginvalidation, signInWithGoogle, popup_facebook } from "./global.js";

const loginin = document.getElementById("loginbtn");

async function validar(){
    const email = document.getElementById("userlogin").value;
    const pass = document.getElementById("passlogin").value;

    const verificar = loginvalidation(email, pass);
    const validation = await verificar;

    if (validation != null) {
        alert('Authentication successful ' + email); 
        window.location.href = '../templates/pagina.html';
    } else {
        alert('Error: authentication unsuccessful'); 
        console.log('Session ' + email + ' not validated'); 
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    loginin.addEventListener('click', validar);
});

const googleLoginBtn = document.getElementById("googleLoginBtn");

googleLoginBtn.addEventListener('click', async () => {
    try {
        const result = await signInWithGoogle();
        const user = result.user;
        alert('Authentication successful: ' + user.email); 
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error: authentication unsuccessful');
        console.log('Session not validated');
    }
});

const facebookLoginBtn = document.getElementById("facebookLoginBtn");

facebookLoginBtn.addEventListener('click', async () => {
    try {
        const result = await popup_facebook();
        alert('Authentication successful: '); 
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error: authentication unsuccessful');
        console.log('Session not validated');
    }
});
