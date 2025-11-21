// ===============================
//  SESIÓN DE USUARIO
// ===============================

// Simulación de usuario registrado (se reemplaza si el usuario se registra)
if (!localStorage.getItem("usuarios")) {
    let usuarioBase = [
        {
            nombre: "Juan Carlos Copa Mamani",
            correo: "copajuank@gmail.com",
            pass: "123456",
            celular: "74911918"
        }
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuarioBase));
}

// LOGIN
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let user = document.getElementById("user").value.trim();
        let pass = document.getElementById("pass").value.trim();
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));

        let encontrado = usuarios.find(
            u => (u.correo === user || u.nombre === user) && u.pass === pass
        );

        if (!encontrado) {
            document.getElementById("loginMessage").innerText =
                "Datos incorrectos, intenta nuevamente.";
            return;
        }

        localStorage.setItem("sesion", JSON.stringify(encontrado));
        window.location.href = "pages/inicio.html";
    });
});

// CIERRE DE SESIÓN
function cerrarSesion() {
    localStorage.removeItem("sesion");
    window.location.href = "../index.html";
}
