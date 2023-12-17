import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCu2DosavXUDAnpqnwUV8czymfYtLk155Q',
    authDomain: 'auth-7a402.firebaseapp.com',
    projectId: 'auth-7a402',
    storageBucket: 'auth-7a402.appspot.com',
    messagingSenderId: '420090796323',
    appId: '1:420090796323:web:0d585155fac496eca81496',
    measurementId: 'G-MXEKF1Z5ZF'
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
    .then(() => {
        console.log('Persistência definida como local.');
    })
    .catch((error) => {
        console.error('Erro ao definir a persistência:', error);
    });

export { auth };