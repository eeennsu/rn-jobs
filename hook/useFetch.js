import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint, params) => {

  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    url: `https://jsearch.p.rapidapi.com${endPoint}`,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7d928d8d7cmsh11cdf4aed523a21p1559b6jsn43af26516fde',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...params
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    
    try {  
      const { data } = await axios.request(options);

      setDatas(data.data);
 
    } catch (error) {
      setError(error);
      alert(error);

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  }

  return {
    datas,
    isLoading,
    error,
    refetch
  };
}

export default useFetch;