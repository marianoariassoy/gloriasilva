import { useState, useEffect } from "react";
const apiUrl = "http://gloriasilvaphoto.com/backend/api";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url;
        const response = await axios.get(urlOk);
        const json = await response.data;
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
