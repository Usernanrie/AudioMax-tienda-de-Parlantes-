// Sidebar toggle (para responsive)
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("toggleSidebar");

  if(toggle){
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-cerrado");
    });
  }
});
