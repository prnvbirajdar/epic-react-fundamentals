// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = (e) => {
    const value = e.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const inputRef = React.useRef(null);
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input onChange={handleChange} ref={inputRef} id="text" type="text" />
        <p role="alert">{error}</p>
      </div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
