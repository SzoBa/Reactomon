import { useState, useEffect } from "react";
// import Axios from "axios";
import axios from "axios";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   const loadData = async () => {
  //     const response = await Axios.get(url);
  //     if (mounted) {
  //       setFetchedData(response.data);
  //       if (fetchedData !== []) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };
  //   loadData();
  //   return () => {
  //     mounted = false;
  //   };
  // }, [url, fetchedData]);

  useEffect(() => {
    let mounted = true;
    axios
      .get(url)
      .then((response) => {
        if (mounted) {
          setFetchedData(response.data);
        }
      })
      .then(() => {
        if (fetchedData !== []) {
          setIsLoading(false);
        }
      });
    return () => (mounted = false);
  }, [url, fetchedData]);
  return [isLoading, fetchedData];
};
