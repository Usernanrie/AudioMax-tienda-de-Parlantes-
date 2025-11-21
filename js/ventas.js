document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("productos-container");
    const itemsCarrito = document.getElementById("items-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const btnWhatsApp = document.getElementById("btn-whatsapp");
    
    let carrito = {};

    // Definir categorías y prefijos de producto
    const categorias = {
        "Accesorios": "accesorio",
        "Audífonos": "audifono",
        "Parlantes": "parlante",
        "Torres": "torre",
        "Micrófonos": "microfono",
        "Equipos": "equipo"
    };

    // Cargar productos agrupados por categorías
    for (let nombreCat in categorias) {
        const prefijo = categorias[nombreCat];

        // Crear contenedor de categoría
        const catDiv = document.createElement("div");
        catDiv.classList.add("categoria-seccion");
        catDiv.innerHTML = `<h2>${nombreCat}</h2>`;

        const grid = document.createElement("div");
        grid.classList.add("producto-grid");

        // Filtrar productos de esta categoría
        for (let key in window.productos) {
            if (key.startsWith(prefijo)) {
                const p = window.productos[key];
                const div = document.createElement("div");
                div.classList.add("producto");
                div.innerHTML = `
                    <img src="${p.imagen}" alt="${p.nombre}">
                    <h3>${p.nombre}</h3>
                    <p class="precio">Bs ${p.precio}</p>
                    <p class="mini-desc">${p.descripcion}</p>
                    <input type="number" min="1" value="1" id="cant-${p.id}" style="width:60px;margin-bottom:5px;">
                    <button data-id="${p.id}">Agregar al carrito</button>
                `;
                grid.appendChild(div);
            }
        }

        catDiv.appendChild(grid);
        productosContainer.appendChild(catDiv);
    }

    // Función actualizar carrito en pantalla
    function actualizarCarrito() {
        itemsCarrito.innerHTML = "";
        let total = 0;
        for (let id in carrito) {
            const item = carrito[id];
            const div = document.createElement("div");
            div.classList.add("carrito-item");
            div.innerHTML = `
                <span>${item.nombre} x ${item.cantidad}</span>
                <button data-id="${id}">X</button>
            `;
            itemsCarrito.appendChild(div);
            total += item.precio * item.cantidad;
        }
        totalCarrito.textContent = `Total: Bs ${total}`;
    }

    // Agregar productos al carrito
    productosContainer.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const id = e.target.dataset.id;
            const cantidad = parseInt(document.getElementById(`cant-${id}`).value);
            if (carrito[id]) {
                carrito[id].cantidad += cantidad;
            } else {
                carrito[id] = {...window.productos[id], cantidad};
            }
            actualizarCarrito();
        }
    });

    // Eliminar producto del carrito
    itemsCarrito.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const id = e.target.dataset.id;
            delete carrito[id];
            actualizarCarrito();
        }
    });

    // Generar link de WhatsApp
    btnWhatsApp.addEventListener("click", () => {
        if (Object.keys(carrito).length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        let mensaje = "Hola, quiero pedir los siguientes productos:%0A";
        for (let id in carrito) {
            const item = carrito[id];
            mensaje += `- ${item.nombre} x ${item.cantidad} (Bs ${item.precio} c/u)%0A`;
        }
        const url = `https://wa.me/59174911918?text=${mensaje}`;
        window.open(url, "_blank");
    });
});
