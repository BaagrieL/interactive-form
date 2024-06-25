function formatCardNumber(cardNumber) {
    return cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

const model = {
    cardNumber: "",
    cardName: "",
    cardCvc: "",
    
    setCardNumber(newCardNumber) {
        this.cardNumber = newCardNumber;
        // Notificar a View sobre a atualização do estado
        view.updateCardNumber(this.cardNumber);
    },
    
    setCardName(newCardName) {
        this.cardName = newCardName;
        view.updateCardName(this.cardName);
    },

    setCardCvc(newCardCvc) {
        this.cardCvc = newCardCvc;
        view.updateCardCvc(this.cardCvc);
    }
};

const view = {
    init() {
        this.cardNumberInput = document.getElementById("input-numero");
        this.cardNumberDisplay = document.getElementById("numero-display");

        this.cardNameInput = document.getElementById("input-nome");
        this.cardNameDisplay = document.getElementById("nome-display");

        this.cardCvcInput = document.getElementById("input-cvc");
        this.cardCvcDisplay = document.getElementById("cvc-display");

        this.bindEvents();
    },

    bindEvents() {
        this.cardNumberInput.addEventListener("input", (event) => {
            controller.updateCardNumber(event.target.value);
        });

        this.cardNameInput.addEventListener("input", (event) => {
            controller.updateCardName(event.target.value);
        });

        this.cardCvcInput.addEventListener("input", (event) => {
            controller.updateCardCvc(event.target.value);
        });
    },

    updateCardNumber(newCardNumber) {
        this.cardNumberDisplay.textContent = formatCardNumber(newCardNumber);
    },
    
    updateCardName(newCardName) {
        this.cardNameDisplay.textContent = newCardName;
    },

    updateCardCvc(newCardCvc) {
        this.cardCvcDisplay.textContent = newCardCvc;
    }
};

const controller = {
    init() {
        view.init();
    },

    updateCardNumber(newCardNumber) {
        model.setCardNumber(newCardNumber);
    },

    updateCardName(newCardName) {
        model.setCardName(newCardName);
    },

    updateCardCvc(newCardCvc) {
        model.setCardCvc(newCardCvc);
    }
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    controller.init();
});


function checkCvcLength(element) {
    if (element.value.length > 3) {
        element.value = element.value.slice(0, 3);
    }
}

function checkNumberLength(element) {
    if (element.value.length > 16) {
        element.value = element.value.slice(0, 16);
    }
}

function validateCardNumber() {
    var input = document.getElementById("input-numero");
    if (input.value.length !== 16) {
        alert("O número do cartão deve ter exatamente 16 dígitos.");
        return false;
    }
    return true;
}