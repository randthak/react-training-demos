import React from "react";
import "./Home.css";

const home= ()=>{
    const jsxStyle={
        color: 'teal',
        textDecoration: "underline"
    }
    return <h2 style={jsxStyle} className='homeHeader'> Welcome home ...</h2>
}

export default home;