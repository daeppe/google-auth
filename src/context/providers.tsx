import { AuthProvider } from './Auth/AuthProvider';

export function Providers({ children }: { children: JSX.Element }) {
    return (
        <AuthProvider>{children}</AuthProvider>
    );
}