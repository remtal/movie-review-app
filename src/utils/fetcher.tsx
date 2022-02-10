/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";

import Axios from "axios";

// All of your API requests should be in this file

export default function Fetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=8345f890f01ebb699c49936f558f9506"
    ).then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
}
