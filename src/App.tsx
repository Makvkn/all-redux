import React from 'react';
import './App.css';
import PageRedux from "./pages/PageRedux";
import {Route, Routes} from "react-router-dom";
import MobX from "./pages/MobX";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <main className="App-main">
            <Routes>
                <Route path="/Redux" element={<PageRedux/>}/>
                <Route path="/MobX" element={<MobX/>} />
            </Routes>

        </main>
    </div>
  );
}

export default App;
