import { popup_facebook, registerMail, signInWithGoogle, correoVerifi } from "./global.js";

const registEmails = document.getElementById('btnRegist');

async function registMail() {
    if (window.pase === true) {
        const emailr = document.getElementById("mail").value;
        const passr = document.getElementById("pass").value;
        try {
            await registerMail(emailr, passr);
            await correoVerifi(emailr);
            alert('Registro exitoso');
            window.location.href = "../index.html";
        } catch (error) {
            alert('Error al registrar: ' + error.message);
        }
    }
}

registEmails.addEventListener('click', registMail);

const googleRegistBtn = document.getElementById("googleRegistBtn");

googleRegistBtn.addEventListener('click', async () => {
    try {
        await signInWithGoogle();
        alert('Registro exitoso');
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error al registrar con Google: ' + error.message);
    }
});

const facebookRegistBtn = document.getElementById("facebookRegistBtn");

facebookRegistBtn.addEventListener('click', async () => {
    try {
        await popup_facebook();
        alert('Registro exitoso');
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error al registrar con Facebook: ' + error.message);
    }
});
