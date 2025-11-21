// ===============================
//  VALIDACIONES REGISTRO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let pass = document.getElementById("pass").value.trim();
        let pass2 = document.getElementById("pass2").value.trim();

        if (!nombre || !correo || !pass || !pass2) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (pass.length < 6) {
            alert("La contraseña debe tener mínimo 6 caracteres.");
            return;
        }

        if (pass !== pass2) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        usuarios.push({
            nombre,
            correo,
            pass
        });

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso.");
        window.location.href = "../index.html";
    });
});
// Validaciones para formularios genéricos
function validarEmail(email){
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
