import React from 'react'
import Resturant from './components/Basic/Resturant'
const App = () => {
  return (

    <>

    <h1 style={{color :"red"}}>Props in react</h1>
   
    <Resturant name={"sandeep"} email="sandeep@gmail.com" other={{address:"pune",zip:"410410"}}/>
    <Resturant name={"Deepali"} email="deepali@gmail.com" other={{address:"Mubai",zip:"410410"}}/>
    <Resturant name={"Jayesh"} email="sandesh@gmail.com"other={{address:"katraj",zip:"410410"}}/>
    </>
  )
}

export default App