import React from 'react'
import { Link } from 'react-router-dom'

const Setup: React.FC = () => {
  console.log('in setup page')

  return (
    <div>
      <h1>Setup</h1>
      <Link to="auth">Go to auth</Link>
    </div>
  )
}

export default Setup
