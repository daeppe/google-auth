import { GoogleLogo } from '@phosphor-icons/react';
import { signOut } from 'firebase/auth';

import './styles.scss';
import { auth } from '../../services/firebase';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';

export function SignIn() {
    const authContext = useContext(AuthContext);
    const user = authContext.user;

    useEffect(() => {
        authContext.login();
    }, [authContext]);

    function handleGoogleSignIn() {
        authContext.login();

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