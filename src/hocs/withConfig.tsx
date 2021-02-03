import React from 'react'
import { Redirect } from 'react-router-dom'

import { checkConfigExists } from '../utils/user-config'

interface WithConfigProps {
  config: boolean
}

// NOTE: I was going to wrap the contacts to make sure the contacts exist but I would
// have to change the Store for that and I don't have more time for that so I'll leave it unused
// as an example of a HOC
export function withConfig<T extends WithConfigProps = WithConfigProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithConfig = (props: Omit<T, keyof WithConfigProps>) => {
    const configExists = checkConfigExists()

    if (!configExists) return <Redirect to="/initial-setup" />
    return <WrappedComponent {...(props as T)} />
  }

  ComponentWithConfig.displayName = `withConfig(${displayName})`

  return ComponentWithConfig
}
