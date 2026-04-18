import app from "./firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export const registerFullUser = async (userData) => {
    try {
        // 1. Crear el usuario en Auth
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
        );

        const user = userCredential.user;

        // 2. Guardar en Firestore usando el UID obtenido
        await setDoc(doc(db, "users", user.uid), {
            name: userData.name,
            email: userData.email,
            cellphone: userData.cellphone,
            address: userData.address,
            createdAt: new Date()
        });

        return { success: true, user };
    } catch (error) {
        console.error("Error en el servicio de registro:", error);
        return { success: false, error: error.code };
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return { success: true, user };
    } catch (error) {
        console.error("Error en el servicio de login:", error.code);

        // Mapeo rápido de errores comunes de login
        let errorMessage = "Error al iniciar sesión";
        if (error.code === 'auth/invalid-credential') {
            errorMessage = "Correo o contraseña incorrectos";
        } else if (error.code === 'auth/user-not-found') {
            errorMessage = "El usuario no existe";
        }

        return { success: false, error: errorMessage };
    }
};
