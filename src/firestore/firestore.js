import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,
        setDoc, doc, getDoc, updateDoc,
        query, where, increment, deleteDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRfXx0am-iyL-9jJObCTwcRzGya2aggU",
  authDomain: "tareadis-ad89e.firebaseapp.com",
  projectId: "tareadis-ad89e",
  storageBucket: "tareadis-ad89e.appspot.com",
  messagingSenderId: "92198074803",
  appId: "1:92198074803:web:3e0016e12412d2448f73c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function fetchCollectionData(collectionName){
  try {
    const colRef = collection(db,collectionName)
    const colSnapshot = await getDocs(colRef)
    const dataList = colSnapshot.docs.map(doc => doc.data())
    return dataList 
  } catch (error) {
    console.log(error)
  }  
}

async function updateCantOfAProduct(col,productName,cant=-1){
  const colRef = collection(db,col)
  const q = query(colRef,where("name","==",productName))
  const querySnapshot = await getDocs(q)
  let docId
  querySnapshot.forEach((doc) => docId = doc.id)
  
  const docRef = doc(db,col,docId)
  const docSnapshot = await getDoc(docRef)
  const newCant = docSnapshot.data().cant + cant
  await updateDoc(docRef,{cant:newCant})
}

export async function addToShoppingCart(col,docId,docInfo){
  try{
    const docRef = doc(db,'ShopingCart',docId)
    const docSnapshot = await getDoc(docRef)
    
    if(docSnapshot.exists()){
      await updateDoc(docRef,{cant:increment(1)})
    }else{
      await setDoc(docRef,docInfo)
    }
    await updateCantOfAProduct(col,docId)
  }catch(error){
    console.log(error)
  }
}

export async function deleteFromShoppingCart(productId,cant,col){
  try{
    //Eliminamos el documento
    const productRef = doc(db,'ShopingCart',productId)
    await deleteDoc(productRef)

    //Devolvemos la cantidad a su respectiva colección
    updateCantOfAProduct(col,productId,cant)
  }catch(error) {
    console.log(error)
  }
}

export async function buyAllItemsFromShoppingCart(){
  const colRef = collection(db,'ShopingCart')
  const colSnapshot = await getDocs(colRef)
  const dataList = colSnapshot.docs.map(doc => doc.id)
  dataList.forEach(id =>{
    deleteDoc(doc(db,'ShopingCart',id))
  })
}