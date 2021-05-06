import React from 'react';
import useData from '../../hooks/useData';
import Header from '../Header';
import STYLES from './App.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const { error, loading, works } = useData();
  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {(loading || error) && loading ? 'Loading...' : error}
        {works.length && <pre>{JSON.stringify(works, null, 2)}</pre>}
      </main>
    </div>
  );
};
export default App;
