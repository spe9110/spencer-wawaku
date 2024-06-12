import { useState } from "react";
import axios from "axios";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const res = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setResponse({
        type: 'success',
        message: `Thanks ${data.firstName} for your submission, I will get back to you shortly!`,
      });
      console.log(res.data);      
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;

/*

import { useState } from "react";
import axios from "axios";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const res = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
      console.log(res.data);      
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;

*/ 