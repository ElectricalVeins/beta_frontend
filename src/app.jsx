import { ToastContainer } from 'react-toastify';
import { Authenticator } from '@aws-amplify/ui-react';

import { configureAwsCognito } from './services';
import { Header } from "./components";
import { Home } from "./pages";

configureAwsCognito();

export const App = () => {
    return (
        <Authenticator.Provider>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                draggable
                pauseOnHover
                theme="light"
                limit={3}
            />
            <Header />
            <Home />
        </Authenticator.Provider>
    )
}
