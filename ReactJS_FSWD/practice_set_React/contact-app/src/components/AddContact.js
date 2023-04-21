import React from "react";

class AddContact extends React.Component{

    state ={
        name:"",
        email:"",
    }; 

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" && this.state.email==="")
        {alert("All Fileds are mandetary");
    
    return;
} console.log(this.state);
    }

    render(){
        return( 

            <div className="ui main">
                <h2>Add Contact</h2>
                <from className="ui form" onSubmit={this.add}>
                    <div className="filed">
                        <lebal>Name</lebal>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target})}/>
                    </div>
                    <div className="filed">
                        <lebal>Email</lebal>
                        <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={(e)=>this.setState({email: e.target})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </from>
            </div>


        );
    }

}

export default AddContact;