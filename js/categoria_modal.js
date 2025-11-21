document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-producto");
  const modalImg = document.getElementById("modal-img");
  const modalNombre = document.getElementById("modal-nombre");
  const modalPrecio = document.getElementById("modal-precio");
  const modalDescripcion = document.getElementById("modal-descripcion");
  const modalDatasheet = document.getElementById("modal-datasheet");
  const btnAgregar = document.getElementById("agregar-carrito");
  const cerrar = document.querySelector(".cerrar");

  let productoActual = null;

  // Abrir modal al hacer clic en cualquier producto
  document.querySelectorAll(".producto-lista").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;
      productoActual = window.productos[id];

      if (productoActual) {
        modalImg.src = productoActual.imagen;
        modalNombre.textContent = productoActual.nombre;
        modalPrecio.textContent = "Bs " + productoActual.precio;
        modalDescripcion.textContent = productoActual.descripcion;

        // Limpiar y agregar datasheet
        modalDatasheet.innerHTML = "";
        if (productoActual.datasheet) {
          productoActual.datasheet.forEach(dato => {
            const li = document.createElement("li");
            li.textContent = dato;
            modalDatasheet.appendChild(li);
          });
        }

        modal.style.display = "block";
      }
    });
  });

  // Cerrar modal
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target == modal) modal.style.display = "none";
  });

  // Agregar al carrito
  btnAgregar.addEventListener("click", () => {
    if (!productoActual) return;
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(productoActual);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${productoActual.nombre} agregado al carrito!`);
    modal.style.display = "none";
  });
});
