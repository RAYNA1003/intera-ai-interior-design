const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");

dobInput.addEventListener("change", () => {
    const dob = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    ageInput.value = age;
});

document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
});
