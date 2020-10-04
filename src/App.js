import React, {useState} from 'react';
import './App.css';
import List from "./List";
import TreeContext from './TreeContext'
import {getMockTreeRoot} from "./functions";


function App() {
    const [tree, setTree] = useState(getMockTreeRoot(setTree));

    return (
        <div className="App">
            <TreeContext.Provider value={[tree, setTree]} >
                <List />
            </TreeContext.Provider>
        </div>
    );
}

export default App;
