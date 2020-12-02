//Email Validator Function from W3Resource
export function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

//Phone Number Validator (North American) from W3Resource
export function ValidatePhone(phone) {
    var expression = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if ((phone.match(expression))) {
        return true;
    }

    return false;
}