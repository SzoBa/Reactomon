import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState(null);

  //   useEffect(() => {
  //     async function getFetch() {
  //       const res = await axios.get(url);
  //       console.log(res);
  //       setFetchedData(res.data);
  //     }
  //     getFetch();
  //   });
  //   return fetchedData;
  // };

  useEffect(() => {
    axios
      .get(url)
      .then(console.log("lai"))
      .then((response) => setFetchedData(response.data))
      .catch((err) => console.error(err));
  }, []);
  return fetchedData;
};
