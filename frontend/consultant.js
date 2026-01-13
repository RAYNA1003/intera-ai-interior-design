function openChat(designerName) {
    // store selected consultant
    localStorage.setItem("selectedConsultant", designerName);

    // redirect to existing chat page
    window.location.href = "chat.html";
}
