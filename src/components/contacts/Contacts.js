import React from "react";
import contactList from "../../data/contactList";
import Contact from "../contact/Contact";
import Names from "../nameList/nameList";

const Contacts= () => {
    let contacts = contactList.map(contObj => <Contact 
        key={contObj.id}
        name={contObj.name} 
        email={contObj.email} 
        phoneNumber={contObj.phone}  
        gender={contObj.gender} 
        contacted={contObj.contacted}> </Contact>);
    
    return(
        
        <div>
            {contacts}
            <Names></Names>
        </div>
    )
}

export default Contacts;
