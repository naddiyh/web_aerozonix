import { db } from "@/config/firebase";
import { IDrone } from "@/interfaces";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  DocumentData,
  query,
  orderBy,
} from "firebase/firestore";

const convertToInterface = <T>(doc: DocumentData): T => {
  try {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      lastMaintenance: data.lastMaintenance?.toDate(),
      lastUpdated: data.lastUpdated?.toDate(),
      timestamp: data.timestamp?.toDate(),
    } as T;
  } catch (error) {
    console.error("Error converting doc to interface:", error);
    throw error;
  }
};

// Drone methods
const getAllDrones = async () => {
  try {
    const dronesCollection = query(collection(db, "drones"), orderBy("code"));
    const snapshot = await getDocs(dronesCollection);
    console.log("Snapshot retrieved:", snapshot);
    return snapshot.docs.map((doc) => convertToInterface<IDrone>(doc));
  } catch (error) {
    console.error("Error getting all drones from Firestore:", error);
    throw error;
  }
};

// async getDroneById(id: string): Promise<Drone | null> {
//   const droneDoc = doc(this.db, "drones", id);
//   const snapshot = await getDoc(droneDoc);
//   return snapshot.exists() ? this.convertToInterface<Drone>(snapshot) : null;
// }

const addDrone = async (drone: Omit<IDrone, "id">): Promise<string> => {
  try {
    const dronesCollection = collection(db, "drones");
    const docRef = await addDoc(dronesCollection, {
      ...drone,
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding drone to Firestore:", error);
    throw error;
  }
};

//   async updateDrone(id: string, drone: Partial<Drone>): Promise<void> {
//     const droneDoc = doc(this.db, "drones", id);
//     await updateDoc(droneDoc, {
//       ...drone,
//       lastUpdated: new Date(),
//     });
//   }

const deleteDrone = async (id: string): Promise<void> => {
  const droneDoc = doc(db, "drones", id);
  await deleteDoc(droneDoc);
};

export { getAllDrones, addDrone, deleteDrone, convertToInterface };
