import React from 'react'

import PasswordForm from '../../components/password-form'

import { createUsersConfigFile } from '../../utils/file-system'

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
