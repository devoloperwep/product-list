import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        const reqData = await req.json();
        if (req.status !== 200) throw new Error(req.statusText);
        setData(reqData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, isPanding, error };
};
