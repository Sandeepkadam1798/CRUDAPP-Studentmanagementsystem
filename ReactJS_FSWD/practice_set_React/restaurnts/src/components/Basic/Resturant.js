// import React from 'react';
// import "./style.css";

// const Resturant = () => {
//   return (
// <> 
// <div className="card-container">

//     <div className='card'>
//         <div className="card-body">
//             <span className='card-number card-circle subtle'><h1>sandeep</h1></span>
//         </div>
//     </div>
// </div>

// </>
//   )
// }

// export default Resturant;

// import React from 'react'

// const Resturant = (props) => {

//   return (
//     <div>
//       <h2>Resturant {props.name}</h2></div>
    
//   )
// }

// export default Resturant;

// function Resturant(props){
//   console.log(props)
//   return(
//     <>
//     <div>
//       <h2>Resturant {props.email}</h2></div>
//       </>
//   )
// }
// export default Resturant;

import React from 'react'

function Resturant(props) {
  return (
    <>
    <div style={{backgroundColor:"skyBlue", margin:10,padding:10}}> 
    <h1>Hello {props.name}</h1>
    

    <h1>Email id is {props.email}</h1>
    <h4>Add: {props.other.address}</h4>
    
    </div>
    </>

  )
}

export default Resturant