import React,{useState,useEffect} from 'react';
import axios from 'axios';

const initialState = "";

const LoadMessageFunctional = () => {
    const [message, setMessage] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(async() => {

    //     const response = axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
    //     setMessage(response.data)
    //     // effect
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [message])

    useEffect(() =>{
        loadMessage()
    },[]);

    const loadMessage = async() => {
try{
    setIsLoading(true)
        const response = await axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
        setMessage(response.data)
        // effect
        // return () => {
        //     cleanup
        // }
setIsLoading(false)

}
catch(e){
    setIsLoading(false)
    setMessage(e.message)
}
    }
    return (
        <div>
            <h3>{message}</h3>
        </div>
    )
}

export default LoadMessageFunctional
