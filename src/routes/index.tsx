import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { PageNotAllowed } from '../pages/PageNotAllowed';
import { AllowedPage } from '../pages/AllowedPage';

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/pagenotallowed' element={<PageNotAllowed />} />
                <Route path='/allowedpage' element={<AllowedPage />} />
            </Routes>
        </BrowserRouter>
    );

}