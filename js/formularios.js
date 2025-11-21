// ===============================
//  FORMULARIOS GENERALES
// ===============================

// CONTACTO
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente.");
            contactForm.reset();
        });
    }
});

// PEDIDOS → REDIRECCIÓN A WHATSAPP
document.addEventListener("DOMContentLoaded", () => {
    const pedidoForm = document.getElementById("pedidoForm");

    if (pedidoForm) {
        pedidoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let nombre = document.getElementById("nombre").value.trim();
            let producto = document.getElementById("producto").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();

            let texto = `Hola, soy *${nombre}* y quiero realizar un pedido.\n` +
                        `Producto: *${producto}*\n` +
                        `Mensaje: ${mensaje}`;

            let url = "https://wa.me/59174911918?text=" + encodeURIComponent(texto);

            window.open(url, "_blank");
        });
    }
});
function mostrarMensaje(id, msg){
  document.getElementById(id).textContent = msg;
}
