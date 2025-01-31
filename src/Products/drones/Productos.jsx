import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const db = getFirestore();

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await db.collection('Items').get();
      const itemsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() 
      }));
      setProductos(itemsData);
    };

    fetchData();
  }, []);

  return null;
};

export default Productos;