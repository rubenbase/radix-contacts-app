import React, { useState } from 'react'

// Icons
import Eye from '../../components/icons/Eye'
import EyeOff from '../../components/icons/EyeOff'
import { Link } from 'react-router-dom'

const Auth: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  console.log('in auth page')
  return (
    <div className="relative bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="relative">
        <div className="flex justify-center">
          <svg
            className="h-7 w-auto -ml-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 32"
          >
            <path
              d="M28.8 12.8h8.4c2.4 0 4.2.7 5.4 1.9 1 1 1.6 2.4 1.6 4.1v.1c0 3.1-1.9 5-4.5 5.7l5.1 7.1h-3.9l-4.6-6.6h-4.1v6.6h-3.3V12.8zm8.2 9.4c2.4 0 3.9-1.2 3.9-3.2s-1.5-3.1-3.9-3.1h-4.8v6.3H37zM57.6 12.7h3.1l8.3 19h-3.5l-1.9-4.6h-8.9l-1.9 4.6h-3.4l8.2-19zm4.8 11.5l-3.3-7.5-3.2 7.5h6.5zM74.4 12.8h7c5.9 0 10 4.1 10 9.4v.1c0 5.3-4.1 9.4-10 9.4h-7V12.8zm3.3 3v12.8h3.7c4 0 6.5-2.7 6.5-6.4v-.1c0-3.7-2.6-6.4-6.5-6.4h-3.7zM97.3 12.8h3.3v18.9h-3.3zM123.7 12.8l-6.5 9.2 6.8 9.7h-3.9l-5-7.2-4.9 7.2h-3.8l6.8-9.6-6.6-9.3h3.9l4.7 6.9 4.7-6.9z"
              fill="#fff"
            ></path>
            <path
              d="M13.4 27.7c-.6 0-1.2-.3-1.5-.8L4.4 16.6H-.4v-3.8h5.8c.6 0 1.2.3 1.5.8L13 22 22.3.8c.3-.7 1-1.1 1.7-1.1h11.6v3.8H25.2L15.1 26.6c-.3.6-.8 1-1.5 1.1h-.2"
              fill="#00c389"
            ></path>
          </svg>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Welcome back
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
            Enter your password to continue
          </p>
        </div>
        <form action="#" className="w-96 mt-10 sm:mx-auto sm:max-w-lg sm:flex">
          <div className="min-w-0 flex-1 flex relative">
            <label htmlFor="inputPassword" className="sr-only">
              Type your password
            </label>
            <input
              id="inputPassword"
              type={isPasswordVisible ? 'text' : 'password'}
              className="w-full border border-gray-500 rounded-md pl-5 pr-11 py-3 text-base bg-gray-800 text-white placeholder-gray-500 shadow-sm"
              placeholder="Type your password"
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
        <Link to="initial-setup">Go to setup</Link>
      </div>
    </div>
  )
}

export default Auth
