import React from 'react'

import PasswordForm from '../../components/password-form'

const Auth: React.FC = () => {
  return (
    <PasswordForm
      title="Welcome back"
      description="Enter your password to continue"
      onSubmitCallback={() => {
        return false
      }}
    />
  )
}

export default Auth
