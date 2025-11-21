document.addEventListener("DOMContentLoaded", () => {

    const userLogged = JSON.parse(localStorage.getItem("usuarioActivo"));
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!userLogged) {
        console.warn("Sesión no encontrada → redirigiendo");
        window.location.href = "../index.html";
        return;
    }

    // Mostrar info
    document.getElementById("userName").textContent = userLogged.nombre || "";
    document.getElementById("userEmail").textContent = userLogged.correo || "";
    document.getElementById("userRol").textContent = userLogged.rol || "";


    // Actualizar contraseña
    document.getElementById("changePwdForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const newPwd = document.getElementById("newPwd").value.trim();
        const confirmPwd = document.getElementById("confirmPwd").value.trim();
        const msg = document.getElementById("pwdMsg");

        if (!newPwd || !confirmPwd) {
            msg.textContent = "Los campos no pueden estar vacíos.";
            msg.style.color = "red";
            return;
        }

        if (newPwd !== confirmPwd) {
            msg.textContent = "Las contraseñas no coinciden.";
            msg.style.color = "red";
            return;
        }

        const index = users.findIndex(u => u.correo === userLogged.correo);

        if (index !== -1) {
            users[index].contrasena = newPwd;
            localStorage.setItem("usuarios", JSON.stringify(users));

            msg.textContent = "Contraseña actualizada correctamente.";
            msg.style.color = "lime";
        }
    });

});
