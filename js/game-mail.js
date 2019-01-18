function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('contact-form-submit').addEventListener('click', function (evt) {
    const email = document.getElementById('exampleInputEmail1').value;
    const emailErrorContainer = document.getElementById('premiere-email-error');
    emailErrorContainer.innerHTML = "";
    if (!validateEmail(email)) {
        evt.preventDefault();
        emailErrorContainer.innerHTML = "E-mail powinien mieć format nazwa@domena";
    }
    const termErrorContainer = document.getElementById('premiere-terms-error');
    termErrorContainer.innerHTML = "";
    if (!validateTerms()) {
        evt.preventDefault();
        termErrorContainer.innerHTML = "Musisz zaakceptować warunki regulaminu";
    }

})

function validateTerms() {
    return document.getElementById('premiere-terms-checkbox').checked;
}



