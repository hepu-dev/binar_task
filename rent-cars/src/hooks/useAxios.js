import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = axios.get(url);
        setResponse(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  // useEffect(() => {
  //     setLoading(true);
  //     axios
  //         .get(url)
  //         .then((Response) => {
  //             setLoading(false);
  //             setResponse(Response);
  //         })
  //         .catch((error) => {
  //             setLoading(false);
  //             setError(error);
  //         });
  // }, [url]);

  return { loading, response, error };
}
