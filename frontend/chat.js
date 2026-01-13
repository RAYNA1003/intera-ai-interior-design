// ===== CONSULTANT NAME HANDLING =====
const consultant = localStorage.getItem("selectedConsultant");
const consultantHeading = document.getElementById("consultantName");

if (consultant && consultantHeading) {
    consultantHeading.innerText = `Chat with ${consultant}`;
}

// ===== CHAT FUNCTIONALITY =====
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(userMsg);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Placeholder consultant response
    setTimeout(() => {
        const consultantMsg = document.createElement("div");
        consultantMsg.classList.add("message", "consultant");
        consultantMsg.innerHTML = `
            <p>
                Thank you for sharing. Could you please tell me the room size and preferred style?
            </p>`;
        chatMessages.appendChild(consultantMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// ===== POINT 5: CLEAR CONSULTANT ON EXIT =====
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("selectedConsultant");
});
