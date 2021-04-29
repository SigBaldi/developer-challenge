import React from 'react';
import Header from '../Header';
import STYLES from './App.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <p>Your turn good luck 👍 </p>
      {/* TODO: Add your components here */}
    </main>
  </div>
);

export default App;
