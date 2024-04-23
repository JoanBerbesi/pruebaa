import { userstate, logout, borrar_account } from "./global.js";

userstate()

const cerrar = document.getElementById('logout')

async function sesion() {
    const validar = logout()
    const verificar = await validar

        .then((verificar) => {
            alert('sesion cerrada')
            window.location.href = "../index.html"
        }).catch((error) => {
            alert('Sesion no cerrada')
        });
}

window.addEventListener('DOMContentLoaded', async () => {
    cerrar.addEventListener('click', sesion)
})

const btnBorrarCuenta = document.getElementById("bntBorrarCuenta")

btnBorrarCuenta.addEventListener('click', async () => {
    try {
        await borrar_account();
        alert('Tu cuenta se borro correctamente.');
        window.location.href = '../index.html';
    } catch (error) {
        alert('Error: delete unsuccessful');
    }
});

