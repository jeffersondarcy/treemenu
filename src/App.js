import React from 'react';
import './App.css';
import List from "./List";
import {getRootItems} from "./functions";

const rootItems = getRootItems();

function App() {
  return (
    <div className="App">
    <List items={rootItems}/>
    </div>
  );
}

export default App;
