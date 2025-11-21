// inicio.js (cargar productos destacados y catálogo)
if(document.getElementById('productGrid')){
  const prodGrid = document.getElementById('productGrid');
  const productsObj = getProducts();
  const all = [];
  Object.values(productsObj).forEach(arr => all.push(...arr));

  function renderFeatured(){
    prodGrid.innerHTML = '';
    all.slice(0,8).forEach(p => {
      const d = document.createElement('div');
      d.className = 'product-card';
      d.innerHTML = `
        <img src="../${p.img}" alt="${p.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px">
        <h4>${p.name}</h4>
        <p>S/ ${p.price.toFixed(2)}</p>
        <button data-id="${p.id}" class="addBtn">Agregar</button>
      `;
      prodGrid.appendChild(d);
    });
  }
  renderFeatured();
}

// catálogo en ventas.html
if(document.getElementById('catalogGrid')){
  const grid = document.getElementById('catalogGrid');
  const categoriesList = document.getElementById('categoriesList');
  const productsObj = getProducts();
  const catNames = Object.keys(productsObj);

  catNames.forEach(cat => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-cat="${cat}">${cat}</a>`;
    categoriesList.appendChild(li);
  });

  function renderCatalog(cat){
    grid.innerHTML = '';
    const arr = (productsObj[cat] || []).slice();
    arr.forEach(p => {
      const d = document.createElement('div');
      d.className = 'product-card';
      d.innerHTML = `
        <img src="../${p.img}" alt="${p.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px">
        <h4>${p.name}</h4>
        <p>S/ ${p.price.toFixed(2)}</p>
        <div style="display:flex;gap:6px;align-items:center">
          <input type="number" min="1" value="1" style="width:70px" class="qty">
          <button data-id="${p.id}" data-cat="${cat}" class="addToCart">Agregar</button>
        </div>
      `;
      grid.appendChild(d);
    });
  }

  renderCatalog(catNames[0]);
  categoriesList.addEventListener('click', e=>{
    if(e.target.matches('a')){ e.preventDefault(); renderCatalog(e.target.dataset.cat); }
  });

  grid.addEventListener('click', e=>{
    if(e.target.matches('.addToCart')){
      const id = Number(e.target.dataset.id);
      const cat = e.target.dataset.cat;
      const qty = Number(e.target.parentElement.querySelector('.qty').value) || 1;
      const arr = productsObj[cat];
      const prod = arr.find(p => p.id === id);
      if(!prod) return;
      const cart = getCart();
      const existing = cart.find(c => c.id === id);
      if(existing) existing.qty += qty; else cart.push({ id: prod.id, name: prod.name, price: prod.price, qty });
      saveCart(cart);
      // renderizar carrito si está en la página
      const renderEvt = new Event('cartUpdated');
      document.dispatchEvent(renderEvt);
    }
  });

  // cuando carrito se actualiza, renderizar en la UI
  document.addEventListener('cartUpdated', ()=>{
    const renderCartFn = window.renderCart || function(){};
    if(typeof renderCartFn === 'function') renderCartFn();
    // o fallback: intentar usar formularios.js renderCart
    if(typeof window.renderCart === 'function') window.renderCart();
    else {
      // intenta llamar a la función global declareda en formularios.js
      try { renderCart(); } catch(e){}
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de inicio lista.");
});

// Aquí se pueden agregar animaciones o scripts del inicio
console.log("Inicio cargado correctamente");
