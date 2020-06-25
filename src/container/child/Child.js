import React, { Component } from "react";

class Child extends Component {
    constructor(props){
        super(props);
        this.state={
            clickCounter:0
        }
    }

    btnClicked = () => {
        this.setState({
            clickCounter: this.state.clickCounter+1
        });

        this.props.onBtnClick(this.state.clickCounter+1);
    }
    
    render(){
        return (
            <button onClick={() => this.btnClicked()}> Send value</button>
        )
    }
}

export default Child;