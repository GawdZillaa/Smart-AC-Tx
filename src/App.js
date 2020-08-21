import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainApplication from './MainApplication';

function App() {
  return (
    <div
      className="appContainer"
    >
      <Header 
        linkList={['About','Facts']}
        headerTitle={'Texas'}
      />
      <MainApplication/>
      <Footer
        footerText={'Created by Detrich'}
      />
    </div>
  );
}

export default App;
