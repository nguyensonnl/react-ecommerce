import axios from "axios";
import { useEffect, useState } from "react";

const useQuery = (url, payload) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(url);
        setData(res.data);
        setIsLoading(true);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { data, isLoading };
};

export default useQuery;
