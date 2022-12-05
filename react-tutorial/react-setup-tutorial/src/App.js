import React from 'react';
import thumb from './thumb.jpg';
import Nav from "./Nav";

const App = () => (
    <div>
        <Nav />
        <h1>Hello React!!!</h1>
        <img src={thumb} />
    </div>
);

export default App;