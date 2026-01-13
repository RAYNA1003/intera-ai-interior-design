function openDesigns(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "design-list.html";
}

function toggleLike(el) {
    el.classList.toggle("liked");
    el.innerText = el.classList.contains("liked") ? "♥" : "♡";
}

function saveDesign(category) {
    console.log("Saved category:", category);
    // later → backend / localStorage
}
