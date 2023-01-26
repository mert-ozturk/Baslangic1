import React from 'react'
import User from './components/User';


const App = () => {

  const friends = [
  {
    id:1,
    name:"Ayşe",
  },
  {
    id:2,
    name:"Fatma",
  },
  {
    id:3,
    name:"Hayriye"
  }
  
  ];

  return (
    <>

      <User 
      name="Mert" 
      isLoggedIn={true} 
      friends={friends}/>
     </>
  )
}

export default App
