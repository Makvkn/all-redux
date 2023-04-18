import React from 'react';
import './App.css';
import PageRedux from "./pages/PageRedux";
import {Route, Routes} from "react-router-dom";
import MobX from "./pages/MobX";
import Header from "./components/Header";
import Toolkit from "./pages/Toolkit";
import {Provider} from "react-redux";
import {store} from "./stateManagers/redux/store";
import {storeToolkit} from "./stateManagers/redux-toolkit";


const MiddleComponent = () => {
    return (
        <Provider store={store}>
            <PageRedux/>
        </Provider>
    )
}

const MiddleComponent2 = () => {
    return (
        <Provider store={storeToolkit}>
            <Toolkit/>
        </Provider>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <Routes>
                    {/*<Provider store={store}>*/}
                        <Route path="/Redux" element={<MiddleComponent/>}/>
                    {/*</Provider>*/}

                    <Route path="/MobX" element={<MobX/>}/>

                    {/*<Provider store={storeToolkit}>*/}
                        <Route path="/Toolkit" element={<MiddleComponent2/>}/>
                    {/*</Provider>*/}
                </Routes>
            </main>
        </div>
    );
}

export default App;
