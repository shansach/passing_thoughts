import React,{useEffect} from "react";

export const Thought = (props)=>{

    useEffect(()=>{
        const timeLeft = props.thought.expiresAt - Date.now();
        const timout = setTimeout(()=>props.removeThought(props.thought), timeLeft);
        return ()=>clearTimeout(timout);
    }, [props.thought]);

    const handleRemove = ()=>{
        props.removeThought(props.thought);
    }
    
    return(<li>{props.thought.text} <button onClick={handleRemove}>Remove</button> </li>);
}
