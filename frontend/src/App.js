import React from 'react';
import Routes from './routes';
import Alert from 'react-s-alert';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './styles/main.scss';
import {AlertTemplate} from './components/core/alert-template/alert-template';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </Provider>
            <Alert
                contentTemplate={AlertTemplate}
                stack={{limit: 1}}
            />
        </>
    );
};
export default App;
