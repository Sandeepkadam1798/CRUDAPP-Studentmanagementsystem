import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    clickHandler(){
        alert(this);
    }

    render(){
        return(
            <button onClick={this.clickHandler}>Click mi!</button>
        )
    }
}
export default Button;