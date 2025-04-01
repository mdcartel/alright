let modal;
parent.document.addEventListener("click", (e) => {
    if (e.target.className === "modal-open") {
        modal = parent.document.getElementById(e.target.dataset.id);
        openModal(modal);
    } else if (e.target.className === "modal-close") {
        closeModal(modal);
    } else {
        return;
    }
});

function OpenModal() {
    modal = parent.document.getElementById("demo-modal");
    openModal(modal);
}

const openModal = (modal) => {
    parent.document.body.style.overflow = "hidden";
    modal.setAttribute("open", "true");
    modal.focus();
    parent.document.addEventListener("keydown", escClose);
    let overlay = parent.document.createElement("div");
    overlay.id = "modal-overlay";
    parent.document.body.appendChild(overlay);
};

const closeModal = (modal) => {
    parent.document.body.style.overflow = "auto";
    modal.removeAttribute("open");
    parent.document.removeEventListener("keydown", escClose);
    parent.document.body.removeChild(parent.document.getElementById("modal-overlay"));
};

const escClose = (e) => {
    if (e.keyCode == 27) {
        closeModal();
    }
};