import { useState, useEffect } from "react";
import Axios from "axios";

export const useFetch = (url, dependencyArray = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await Axios.get(url);
      if (mounted) {
        setFetchedData(response.data);
        if (fetchedData !== []) {
          setIsLoading(false);
        }
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, dependencyArray);

  return [isLoading, fetchedData];
};
