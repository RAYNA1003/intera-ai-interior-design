const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        sideMenu.style.right = "0";
        menuOpen = true;
    } else {
        sideMenu.style.right = "-260px";
        menuOpen = false;
    }
});
function logout() {
    localStorage.clear();
    window.location.href = "loginuser.html";
}

