import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCPxcW71xKTV56VhoqT5I-JN45JB1hpWI",
  authDomain: "entrega-3-react-juan-reyes.firebaseapp.com",
  projectId: "entrega-3-react-juan-reyes",
  storageBucket: "entrega-3-react-juan-reyes.appspot.com",
  messagingSenderId: "816412411868",
  appId: "1:816412411868:web:9304174de3baa0a1d0f119"
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getPeliculas() {
    const productsRef = collection(db, "peliculas");
    const documentsSnapshot = await getDocs(productsRef);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map(
        (item) => {
            return { ...item.data(), id: item.id };
        }
    );
    return docsData;
}
  
async function getPeliculaData(id) {
    const docRef = doc(db, "peliculas", id);
    const docSnapshot = await getDoc(docRef);
  
    if (docSnapshot.exists()) {
      return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
      throw new Error("No encontramos esa pelicula.");
    }
}
  
async function getGeneroPelicula(genero) {
    console.log("Genero recibido:", genero);
    const productsRef = collection(db, "peliculas");
    const q = query(productsRef, where("genero", "==", genero));//genero no me da, mirarlo, muestra el console log de aca y el que tienes en itemListContainer
    const documentsSnapshot = await getDocs(q);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map(
        (item) => {
            return { ...item.data(), id: item.id };
        }
    );
    return docsData;
}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
  
    return(docCreated.id)
}
  
  
async function getOrder(id){
    const docRef = doc(db, "orders", id);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export { getPeliculas, getOrder, getPeliculaData, getGeneroPelicula, createOrder };