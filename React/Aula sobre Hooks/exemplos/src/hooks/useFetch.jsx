import { useCallback } from "react";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] =  useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback( async(url, options) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch(error) {
      setError('API endpoint not found')
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, request };
}

export default useFetch;
