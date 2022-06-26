var modal = document.getElementById('my-modal');
var body = document.getElementsByTagName('body')[0];
var inputError = document.getElementById('input-message');

if (document.getElementById("btn-send-modal")) {
    var btn = document.getElementById('btn-send-modal');
    var btnClose = document.getElementById('btn-close-modal');

    btn.onclick = function () {
        modal.style.display = "flex";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    btnClose.onclick = function () {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = "none";
    
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
    inputError.style.display = "none";
}

function sendCard() {
    var name = document.getElementById('name');

    if (name.value.length === 0) {
        inputError.style.display = "inline-block";
    } else {
        closeModal();
        showSuccessMessage(name.value);
    }
}

function showSuccessMessage(name) {
    var cardSection = document.getElementById('card-section');
    var successMessageSection = document.getElementById('message-section');
    var successMessageName = document.getElementById('success-message-name');

    cardSection.style.display = "none";
    successMessageName.innerText = name;
    successMessageSection.style.display = "flex";
}