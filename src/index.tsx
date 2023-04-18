import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import {store} from "./stateManagers/redux/store";
// import {storeToolkit} from "./stateManagers/redux-toolkit/index"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <Provider store={store}>
    //     <Provider store={storeToolkit}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
    //     </Provider>
    // </Provider>
);
