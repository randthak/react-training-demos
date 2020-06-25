import React, { Component, PureComponent } from "react";

import "./CounterClick.css";

class CounterClick extends PureComponent{
    
    constructor(props){
        super(props);
        this.state = {count: props.initNum};
        this.initCount = props.initNum;
    }
    
    countUpHandler = ()=> {
        this.setState(
            {
                count: this.state.count+1
            }
        );
    }

    resetHandler = ()=> {
        this.setState(
            {
                count: this.initCount
            }
        );
    }

    countDownHandler = ()=> {
        this.setState(
            {
                count: this.state.count
            }
        );
    }
    render(){
        console.log("COUNTER RENDER")
        return (
            <div>
                <h2>Count value: {this.state.count}</h2>
                <div className={'counterBtnContainer'}>
                    <button onClick= {this.countUpHandler}> Count Up</button>
                    <button onClick= {this.resetHandler}> Reset </button>
                    <button onClick= {this.countDownHandler}> Count Down</button>
                </div>
            </div>
        )
    }
}

export default CounterClick;