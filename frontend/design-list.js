const grid = document.getElementById("designGrid");
const budgetFilter = document.getElementById("budgetFilter");
const pageTitle = document.getElementById("pageTitle");

const selectedCategory = localStorage.getItem("selectedCategory");

// Set page title
if (selectedCategory) {
    pageTitle.innerText =
        selectedCategory.charAt(0).toUpperCase() +
        selectedCategory.slice(1) +
        " Designs";
}

// Initial render
renderDesigns("all");

// Filter change
budgetFilter.addEventListener("change", () => {
    renderDesigns(budgetFilter.value);
});

function renderDesigns(budget) {
    grid.innerHTML = "";

    const filteredDesigns = designData.filter(design => {
        return (
            design.category === selectedCategory &&
            (budget === "all" || design.budget === budget)
        );
    });

    if (filteredDesigns.length === 0) {
        grid.innerHTML = "<p>No designs found</p>";
        return;
    }

    filteredDesigns.forEach(design => {
        const card = document.createElement("div");
        card.className = "design-card";

        card.innerHTML = `
            <img src="${design.image}" alt="${design.title}">
            <div class="content">
                <h3>${design.title}</h3>
                <p>Budget: ${design.budget.toUpperCase()}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}
