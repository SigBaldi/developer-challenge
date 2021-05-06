
import React, { useState, useEffect } from "react";

function useData() {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const data = await fetch("works.json"); // Hardcoded, could be extracted as a variable to be passed as an argument.
      const json = await data.json();

      if (json) {
        setLoading(false);
        setWorks(json.works);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    error,
    loading,
    works
  };
}

export default useData;