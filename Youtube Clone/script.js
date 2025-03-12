const menuButton = document.querySelector(".menu-button");

//Toggle sidebar visibility when menu buttons are clicked
menuButton.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});