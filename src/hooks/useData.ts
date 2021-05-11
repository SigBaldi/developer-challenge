import React, { useState, useEffect } from 'react';
import fetch from '../services/fetch'
import useSafeAsync from './useAsync';

function useData(): {
  error: string;
  loading: boolean;
  works: never[];
} {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [error, setError] = useState('');

  const safeAsync = useSafeAsync();

  async function fetchData() {
    try {
      const { data } = await fetch('works.json'); // Hardcoded, could be extracted as a variable to be passed as an argument.
      if (data) {
        setLoading(false);
        setWorks(data.works);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    safeAsync(fetchData());
  }, [safeAsync]);

  return {
    error,
    loading,
    works,
  };
}

export default useData;
