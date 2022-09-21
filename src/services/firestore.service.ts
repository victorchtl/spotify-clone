import { collection, doc, DocumentData, getDoc, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { db } from "./firebase";

class FirestoreService {

    async getPlaylists() {
        try {
            let projects: any[] = [];
            const querySnapshot = await getDocs(collection(db, "playlists"));
            querySnapshot.forEach((doc) => {
                projects.push(doc.data())
            });
            return projects;
        }
        catch (error) {
            console.log(error)
        }

    }

    async getPlaylist(id: string) {
        try {
            const docRef = doc(db, "playlists", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    async getTracksById(data: string[]) {
        try {
            let projects: any[] = [];
            const q = query(collection(db, "songs"), where("id", "in", data));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                projects.push(doc.data())
            });
            return projects;
        }
        catch (error) {
            console.log(error)
        }

    }

}

export default new FirestoreService();