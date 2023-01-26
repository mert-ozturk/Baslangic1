import React from 'react'

const User = ({name,isLoggedIn}) => {
  return (
    <h1>
        {isLoggedIn ? `Adım: ${name}`: 'Giriş Yapılmadı'}
      
    </h1>
  )
}

export default User
