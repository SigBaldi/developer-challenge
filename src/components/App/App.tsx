import React from 'react';
import useData from '../../hooks/useData';
import Header from '../Header';
import WorksList from '../WorksList';
import STYLES from './App.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';

const App = (): JSX.Element => {
  const { error, loading, works } = useData();
  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {(loading || error) && loading ? 'Loading...' : error}
        {works.length && <WorksList works={works} />}
      </main>
    </div>
  );
};
export default App;
