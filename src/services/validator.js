export function validatePersonalData(values) {
    console.log(values)
    let errors = [];
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.push('Invalid email address');
    }

    if (values.password.length < 6) {
        errors.push('Password must contain more than 5 symbols');
    }

    return errors;
};