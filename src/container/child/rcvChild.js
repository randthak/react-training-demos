import React, { Component, PureComponent } from "react";

class RcvChild extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            counts:[]
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.msg !== this.props.msg) {
            this.setState({
                counts: this.props.msg
            })
        }
    }
    
    render(){
        return (
            
            <div>
                <h3>Counter list </h3>
                <ul>
                    {this.props.msg.map(cnt => <li key={cnt}> {cnt} </li>)}
                </ul>
            </div>
            
        )
    }
}

export default RcvChild;