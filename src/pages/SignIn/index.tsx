import { GoogleLogo } from '@phosphor-icons/react';
import { GoogleAuthProvider, User, signInWithPopup, signOut } from 'firebase/auth';

import './styles.scss';
import { auth } from '../../services/firebase';
import { useEffect, useState } from 'react';

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        setUser(
            JSON.parse(
                sessionStorage.getItem('firebase:authUser:AIzaSyCu2DosavXUDAnpqnwUV8czymfYtLk155Q:[DEFAULT]') ||
                JSON.stringify('')
            )
        );
    }, []);

    function handleGoogleSignIn() {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleGoogleSignOut() {
        signOut(auth);
        window.location.reload();
    }

    return (
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto Usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta google</h1>

            <span>
                Utilizando autenticação social do google.<br />
                Permitir o usuário fazer autenticação sem criar conta.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com o google!
            </button>

            <button type='button' className='button' onClick={handleGoogleSignOut}>LogOut</button>
        </div>
    );
}