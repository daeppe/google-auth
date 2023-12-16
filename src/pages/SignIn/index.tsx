import { GoogleLogo } from '@phosphor-icons/react';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';

import './styles.scss';
import { auth } from '../../services/firebase';
import { useState } from 'react';

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
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
        </div>
    );
}