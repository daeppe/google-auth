import { User } from 'firebase/auth';
import { createContext } from 'react';

export type AuthContextType = {
    user: User
    login: () => void
}

export const AuthContext = createContext<AuthContextType>(null!);