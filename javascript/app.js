const nameEl = document.querySelector('#name');
const phone_numberEL = document.querySelector('#phone_number');
const qtyEL = document.querySelector('#qty');
const productEL = document.querySelector('#product');
const addressEL = document.querySelector('#address');


const form = document.querySelector('#purchase');


const checkname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};
const checkPhonenumber = () => {

    let valid = false;

    const min = 3,
        max = 25;
const phone_number = phone_numberEL.value.trim();

if (!isRequired(phone_number)) {
    showError(phone_numberEL, 'Phone Number cannot be blank.');
} else if (!isBetween(phone_number.length, min, max)) {
    showError(phone_numberEL, `Phone Number must be between ${min} and ${max} characters.`)
} else {
    showSuccess(phone_numberEL);
    valid = true;
}
return valid;
};

const qty = () => {

    let valid = false;

    const min = 3,
        max = 25;
const qty = qtyEL.value.trim();

if (!isRequired(qty)) {
    showError(qtyEL, 'QTY cannot be blank.');
} else if (!isBetween(qty.length, min, max)) {
    showError(qtyEL, `QTY must be between ${min} and ${max} characters.`)
} else {
    showSuccess(qtyEL);
    valid = true;
}
return valid;
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isnameValid = checkname(),
        isPhonenumber = checkPhonenumber(),
        isQty = qty(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isnameValid &&
    isPhonenumber &&
        isQty &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));