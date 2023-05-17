import React from 'react'
import Login from './Components/Login'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./index.css"
import Home from './Components/Home'
import UpdateDetails from './Components/UpdateDetails'
import Viewdetails from './Components/Viewdetails'
import AddDetails from './Components/AddDetails'
import Viewone from './Components/Viewone'
import Edit from './Components/Edit'
import BottomNav from './Components/Bottomnav'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Update' element={[<UpdateDetails/>,<BottomNav/>]}/>
        <Route path='/View' element={[<Viewdetails/>,<BottomNav/>]}/>
        <Route path='/Viewone/:id' element={[<Viewone/>,<BottomNav/>]}/>
        <Route path='/Edit/:id' element={[<Edit/>,<BottomNav/>]}/>
        <Route path='/Add' element={[<AddDetails/>,<BottomNav/>]}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App