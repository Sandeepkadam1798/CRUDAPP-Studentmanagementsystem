import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Profile from './components/profile';

function App() {
  return (
    <>
<Navbar title="TextUtils"/>
{/* <Profile text={{name:"sandeep"}} data="profile data"/>  for props examplae */}
  <div className="container my-3">
  <TextForm heading="Enter the text to Analyze below"/>
  </div>
   
 
   </>   
  );
}

export default App;
