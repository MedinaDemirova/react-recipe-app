import { firestore } from "../firebase";

export async function addFavRecipe(data) {
    try {
        if (data.creator === undefined) return;
        const res = await firestore.collection(`${data.creator}`).doc(`${data.label}`);
        await res.set(data);
        return;
    } catch (err) {
        throw err;
    }
};

export async function checkIfAddedInFavourites(label) {
    try {
        const res = await firestore.collection(`${localStorage.email}`).doc(`${label}`).get();
        return res.exist ? true : false;
    } catch (err) {
        console.log(err)
    }

}

export async function getFavRecipes(user) {
    let recipes = [];
    try {
        const data = await firestore.collection(`${user}`).get();
        data.forEach(doc => {
            recipes.push(doc.data())
        });
        return recipes;
    } catch (err) {
        throw err;
    }
};


export async function removeFavRecipe(user, label) {
    try {
        const res = await firestore.collection(`${user}`).doc(`${label}`).delete();
        return res;
    } catch (err) {
        console.log(err)
    }
};
