import React,{useEffect} from "react";

export const Thought = (props)=>{

    const {thought, removeThought} = props;

    useEffect(()=>{
        const timeLeft = thought.expiresAt - Date.now();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const timout = setTimeout(()=>removeThought(thought), timeLeft);
        return ()=>clearTimeout(timout);
    }, [thought]);

    const handleRemove = ()=>{
        
        removeThought(thought);
    }
    
    return(<li>{thought.text} <button onClick={handleRemove}>Remove</button> </li>);
}
