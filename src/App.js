import React from 'react'

const name = "Mert";
const surname = "Ozturk";
const isLoggedIn = true;

const App = () => {
  

  return (
    <>
      
      <h1>{isLoggedIn && `benim adım ${name},soyadım ${surname}`}</h1>
      {!isLoggedIn && 'Giriş yapılmadı'}

      <h1>{isLoggedIn ? `benim adım ${name},soyadım ${surname}`:'Giriş Yapılmadı'}</h1>
    </>
  )
}

export default App
