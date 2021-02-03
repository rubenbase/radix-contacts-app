import React from 'react'

import PasswordForm from '../../components/password-form'

import { createUsersConfigFile } from '../../utils/user-config'

// In a real case I wouldn't hardcode the texts, would keep them in a constants file
const Setup: React.FC = () => {
  return (
    <PasswordForm
      title="Welcome"
      description="Enter a password to create and secure your contacts data file"
      onSubmitCallback={createUsersConfigFile}
    />
  )
}

export default Setup
