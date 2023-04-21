import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    clickHandler(){
        alert(this);
    }
     clickHandler1  (){

        alert("Hello");
    }

    render(){
        return(
            <div>
            <button onClick={this.clickHandler}>Click mi!</button>
            <button onClick={this.clickHandler1}>clickmi</button>
            </div>
        )
    }
}
export default Button;