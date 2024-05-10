import {useState} from "react"; 

// This is often used for simulating delays in asynchronous code, like waiting for data to arrive from a server or creating a pause in execution. 
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 
 
/** 
* This is a custom hook that can be used to submit a form and simulate an API call 
* It uses Math.random() to simulate a random success or failure, with 50% chance of each 
*/ 
const useSubmit = () => { 
 const [isLoading, setIsLoading] = useState(false); 
 const [response, setResponse] = useState(null); 
 
 const submit = async (url, data) => { 
   const random = Math.random(); 
   setIsLoading(true); 
   try { 
     await wait(2000); 
     if (random < 0.5) { 
       throw new Error("Something went wrong"); 
     } 
     setResponse({ 
       type: 'success', 
       message: `Thank you ${data.firstName} for your submission, Your message has been successfully sent and we will get back to you shortly!.`, 
     }) 
   } catch (error) { 
     setResponse({ 
       type: 'error', 
       message: 'Something went wrong, please try again later!', 
     }) 
   } finally { 
    setIsLoading(false); 
   } 
 }; 
 
 return { isLoading, response, submit }; 
} 
 
export default useSubmit;