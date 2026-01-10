const likeIcons = document.querySelectorAll(".icon.like");
const saveIcons = document.querySelectorAll(".icon.save");

/* LIKE TOGGLE */
likeIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.textContent = icon.textContent === "♡" ? "♥" : "♡";
        icon.classList.toggle("liked");
    });
});

/* SAVE TOGGLE (INSTAGRAM STYLE) */

saveIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("saved");
    });
});

