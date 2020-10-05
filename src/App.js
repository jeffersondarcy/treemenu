import React, {useState} from 'react';
import {enableMapSet} from "immer"
import './App.css';
import List from "./List";
import TreeContext from './TreeContext'
import {getMockTreeRoot} from "./functions";

enableMapSet()

function App() {
    console.log('start app')
    const [tree, setTree] = useState(getMockTreeRoot());

    return (
        <div className="App">
            <TreeContext.Provider value={[tree, setTree]} >
                <List />
            </TreeContext.Provider>
        </div>
    );
}

export default App;
