import {firestore} from "../firebase";

export async function getFavRecipes(user, data) {
    try {
        const res = await firestore.collection('recipes').set(data);
    } catch (err) {
        throw err;
    }
};


export async function removeFavRecipe(user, id){
    const res = await firestore.collection('recipes').doc(id).delete();
};

