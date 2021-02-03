import React from 'react'

import PasswordForm from '../../components/password-form'

import { validatePassword } from '../../utils/auth'

const Auth: React.FC = () => {
  return (
    <PasswordForm
      title="Welcome back"
      description="Enter your password to continue"
      onSubmitCallback={validatePassword}
    />
  )
}

export default Auth
