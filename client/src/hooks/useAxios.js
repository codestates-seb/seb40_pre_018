import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios(url)
      .then((res) => {
        setIsPending(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsPending(true);
        console.log('Error', err.message);
      });
  }, [url]);

  return [data, isPending];
};

export default useAxios;
