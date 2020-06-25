import React, { Component } from "react";
import Child from "../child/Child";
import RcvChild from "../child/rcvChild";

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            counterValues:[]
        }
    }

    getMessage = (count) =>{
        let tmpArray = [...this.state.counterValues];
        tmpArray.push(count);
        this.setState({
            counterValues: tmpArray 
        })
    }

    render(){
        return (
            <div>
                <Child onBtnClick={this.getMessage}></Child>
                <RcvChild msg= {this.state.counterValues}></RcvChild>
            </div>
        )
    }
}

export default Parent;