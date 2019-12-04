import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import GlobalStyles from "./styles/globals";
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
    ReactDOM.render(
        <div>
            <GlobalStyles/>
            <App/>
        </div>,
        document.getElementById('root'),
    );
};

renderApp();
serviceWorker.unregister();
