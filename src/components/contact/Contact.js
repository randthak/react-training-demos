import React, { Component } from "react";

import "./Contact.css";

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            contacted: props.contacted
        }
        this.show={
            display: 'block'
        }
    
        this.hide={
            display: 'none'
        }
        this.bgColor = props.gender==='male'?'male':'female';
        this.color = props.contacted? "contacted":"";
        console.log(props)
    }
    
    contactedChangeHandler = ()=>{
        let ctd = !this.state.contacted;

        this.color = ctd? "contacted":"";
        this.setState(
            {contacted: ctd}
        )
        console.log(this.state.contacted);
    }

    render(){
        return(
            <div id='contact' className={'contactDiv ' + this.bgColor + " " + this.color} >
                <h3>{this.props.name}</h3>
                <hr/>
                <h4 style = {this.props.email? this.show:this.hide} >Email: {this.props.email}</h4>
                <h4 style = {this.props.phoneNumber? this.show:this.hide} >Phone: {this.props.phoneNumber}</h4>
                <input type="checkbox" checked={this.state.contacted} onChange={this.contactedChangeHandler} id="contacted"/>
                <label htmlFor="contacted"> Contacted </label> 
            </div>
        );
    }
        
}

export default Contact;