import React, {useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {ContactsPage} from "./pages/ContactsPage";
import {Layout} from "./components/Layout";
import {ContactsDetails} from "./pages/ContactsDetails";
import {SecretPage} from "./pages/SecretPage";
import {PageNotFound} from "./pages/PageNotFound";

export const App = () => {
    const [isSecretPageAvailable, setIsSecretPageAvailable] = useState<boolean>(false)
    
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route element={<HomePage availability={isSecretPageAvailable} onChange={() => setIsSecretPageAvailable(prevState => !prevState)}/>} index/>
                <Route path="/contacts" element={<ContactsPage />}/>
                <Route path="/contacts/:contactId" element={<ContactsDetails />}/>
                <Route path="/secret-page" element={<SecretPage availability={isSecretPageAvailable}/>}/>
                <Route path="*" element={<PageNotFound />}/>
            </Route>
            
        </Routes>
    );
}
