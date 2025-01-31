import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from "react"

let Productos = [];

function TraerCollection() {
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then(snapshot => {
      Productos = snapshot.docs.map(docu => ({
        id: docu.id,
        ...docu.data()
      }));
      console.log(Productos); // Para verificar que los datos se han actualizado correctamente
    });
  }, []);

  return null; // No renderiza nada
}

TraerCollection();

export { Productos };