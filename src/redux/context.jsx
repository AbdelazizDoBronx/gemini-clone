import { createContext, useState } from "react";
import run from "../config/AiModel";



export const Context = createContext();


const ContextProvider = (props) => {

    const [input,setInput] = useState('');
    const [recentPrompt,setRecentPrompt] = useState('');
    const [allPrompts,setAllPrompts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showData,setShowData] = useState(false);
    const [responseData,setResponseData] = useState('');


     const sendData = async (prompt)=>{
        setLoading(true);
        setShowData(true);
        const resp = await run(input);
        setAllPrompts((prv)=>[...prv,input])
        setRecentPrompt(input)
        setResponseData(resp);
        setLoading(false);
        setInput('');
        
    }

    

    const contextValue = {
        sendData,input,setInput,setAllPrompts,allPrompts,recentPrompt,loading,setLoading,showData,setShowData,responseData,setResponseData
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;