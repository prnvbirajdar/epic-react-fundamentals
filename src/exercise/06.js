// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const inputRef = React.useRef(null);
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input ref={inputRef} id="text" type="text" />
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
