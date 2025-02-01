import { db } from '../../main';
import { collection, getDoc, getDocs } from 'firebase/firestore';


const getProductos = async () => {

  const itemCollection = collection(db,'Items');
  const querySnapshot= await getDocs(itemCollection);  
  const itemsData = querySnapshot.docs.map((doc) => doc.data());
      return itemsData;
};

export default getProductos;