import { db } from "@/config/firebase";
import { ICOPoint } from "@/interfaces";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const addCOPoint = async (
  droneId: string,
  copointData: ICOPoint,
): Promise<void> => {
  try {
    const copointsRef = collection(db, "drones", droneId, "copoints");
    console.log(copointData);
    await addDoc(copointsRef, copointData)
      .then((docRef) => {
        console.log("COPoint added with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding COPoint: ", error);
      });
  } catch (error) {
    console.error("Error adding COPoint: ", error);
  }
};

export const getCOPoints = async (droneId: string): Promise<ICOPoint[]> => {
  const copointsRef = collection(db, "drones", droneId, "copoints");
  const copointsSnapshot = await getDocs(copointsRef);
  const copoints = copointsSnapshot.docs.map((doc) => doc.data() as ICOPoint);
  console.log({ copoints });
  return copoints;
};

// const exampleCOPoint: COPoint = {
//   altitude: 150,
//   latitude: -3.305,
//   longitude: 117.563,
//   timestamp: firebase.firestore.Timestamp.now(),
// };

// addCOPoint("drone123", exampleCOPoint);
