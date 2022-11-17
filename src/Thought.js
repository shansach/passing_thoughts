import React,{useEffect} from "react";
import './styles.css'

export const Thought = (props)=>{

    const {thought, removeThought} = props;

    useEffect(()=>{
        const timeLeft = thought.expiresAt - Date.now();
        const timout = setTimeout(()=>removeThought(thought), timeLeft);
        return ()=>clearTimeout(timout);
        // eslint-disable-next-line
    }, [thought])

    const handleRemove = ()=>{
        
        removeThought(thought);
    }
    
    return(<li>{thought.text} <button onClick={handleRemove} className='remove-button'>Remove</button> </li>);
}
