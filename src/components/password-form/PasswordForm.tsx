import React, { useState } from 'react'

// Icons
import Eye from '../../components/icons/Eye'
import EyeOff from '../../components/icons/EyeOff'
import Logo from '../logo'

interface Props {
  onSubmitCallback: (password: string) => void
  title: string
  description: string
}

const PasswordForm: React.FC<Props> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await props.onSubmitCallback(password)
      setErrors(false)
    } catch {
      setErrors(true)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const resetErrors = () => {
    setErrors(false)
  }

  return (
    <div className="relative bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="relative">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
            {props.description}
          </p>
        </div>
        <form
          action="#"
          className="w-96 mt-10 sm:mx-auto sm:max-w-lg sm:flex"
          onSubmit={onSubmit}
        >
          <div className="min-w-0 flex-1 flex relative">
            <label htmlFor="inputPassword" className="sr-only">
              Type your password
            </label>
            <input
              id="inputPassword"
              type={isPasswordVisible ? 'text' : 'password'}
              className={`w-full border border-gray-500 rounded-md pl-5 pr-11 py-3 text-base bg-gray-800 text-white placeholder-gray-500 shadow-sm ${
                errors && 'border-red-500'
              }`}
              placeholder="Type your password"
              value={password}
              onChange={handleInputChange}
              onFocus={resetErrors}
            />
            <div className="flex -ml-9">
              <span
                tabIndex={0}
                className="flex items-center text-gray-600 hover:text-gray-300 "
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                onKeyPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <Eye /> : <EyeOff />}
              </span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="flex w-full rounded-md border border-transparent  py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 px-3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
        {errors && <span className="mt-2 text-red-500">Incorrect password</span>}
      </div>
    </div>
  )
}

export default PasswordForm
