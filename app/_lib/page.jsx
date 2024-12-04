import React from 'react'

// this is a private folder / route. This can't be seen from the frontend or by the user. 

// this is private because the folder has "_" before it's name
// "_lib", here _ makes it private folder

const PrivateRoute = () => {
  return (
    <div>
        <h1>You cannot view this in the browser</h1>
    </div>
  )
}

export default PrivateRoute