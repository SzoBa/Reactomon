import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchedData(response.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [url]);
  return [isLoading, fetchedData];
};
