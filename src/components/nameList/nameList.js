import React from "react";
import contactList from "../../data/contactList";
import "./nameList.css";


const nameList= () => {
    let names = contactList.map(contObj => <li className='nameListItem' key={contObj.id}> 
                                                <span className='nameList'> {contObj.name} </span> 
                                                <span className='nameList'> {contObj.email} </span> 
                                                <span className='nameList'> {contObj.phone} </span> 
                                            </li>);
    
    return(
        <div>
            <ul >
                {names}
            </ul>
        </div>
    )
}

export default nameList;
