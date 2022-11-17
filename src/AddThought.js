import React, {useEffect, useState} from "react";
import { generateId, getNewExpirationTime, switchBackground, randomColor} from "./utilities";
import './styles.css'


export const AddThought = (props)=>{

    const [text, setText] = useState("");

    

    const handleChange = (e)=>{
        setText(e.target.value);
    }
    
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        var obj = {id:generateId(), text:text, expiresAt:getNewExpirationTime()}
        
        if(obj.text.length>1)
        {   props.addThought(obj);
            switchBackground();
        }

        setText("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text} placeholder="What's on your mind?"/>
            <input type="submit"  value="Add" id="form_submit"/>
        </form>
    );

}