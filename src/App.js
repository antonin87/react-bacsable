import React from 'react';
import logo from './logo.svg';
import Main from './Main';
import { RestfulProvider } from 'restful-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <RestfulProvider base="https://dog.ceo/api">
          <Main />
      </RestfulProvider>
    </div>
  );
}

export default App;
