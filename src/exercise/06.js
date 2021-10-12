// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(userName)
    setUserName('')
  }

  const handleChange = (e) => {
    setUserName(e.target.value.toLowerCase())
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input onChange={handleChange} value={userName} id="text" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
