let donation = {
    payment: function (creditCard, value) {
        // check if credit card is valid
        const creditCardIsValid = validator.validateCreditCard(creditCard)
        if (creditCardIsValid) {
            // make the payment

            // check si j'ai la thune
            payment.addPayment(creditCard, value)
        } else {
            // show an error
        }
    },
    showPaymentHistory: function (divContainer) {
        // retrieve payments
        const payments = payment.payments

        // display in divContainer
        payments.forEach(function (payment) {
            divContainer.innerHTML += 'Payment : ' + payment.amount + 'with credit card ' + payment.card
        })
    }
}

let payment = {
    payments: [],
    addPayment: function (creditCard, amount) {
        this.payments.push({
            'card': creditCard,
            'amount': amount
        })
    }
}

let validator = {
    validateCreditCard: function (creditCard) {
        creditCard = String(creditCard);
        let sum = parseInt(creditCard.charAt(creditCard.length - 1));
        for (let i = 0; i < creditCard.length - 1; i++) {
            let value = parseInt(creditCard.charAt(i))
            if (i % 2 === 0) {
                value *= 2
            }
            if (value > 9) {
                value -= 9
            }
            sum += value;
        }
        return sum % 10 === 0
    },
}

// add event listeners
document.querySelector('.something').addEventListener('click', function () {
    // method of facade
    // e.g. :
    donation.payment('4532167564751333', 100)
    // or show history
    donation.showPaymentHistory(/* payments container */)
})