export function validatePersonalData(email,password) {
    console.log(email)
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && password.length > 5 ) {
      return true;
    }else {
        return false
    }
};