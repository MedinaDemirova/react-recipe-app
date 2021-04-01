export function checkIfUser() {
    if (localStorage.user) {
        return { email: localStorage.email, token: localStorage.user };
    } else {
        return {};
    }
};