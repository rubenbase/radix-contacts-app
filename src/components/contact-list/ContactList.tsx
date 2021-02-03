import React from 'react'

interface ContactsProps {
  contacts: {
    id: number
    name: string
    phone: string
  }[]
  deleteContact: (id: number) => void
  editContact: (id: number, contact: any) => void
}

const UserList: React.FC<ContactsProps> = (props) => {
  return (
    <>
      <div className="bg-grey-lighter flex-1 overflow-auto">
        {/* Contact Block */}
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => {
            const { id, name, phone } = contact
            return (
              <div
                key={id}
                className="px-3 flex items-center bg-grey-light cursor-pointer"
              >
                <div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                  />
                </div>
                <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                  <div className="flex items-bottom justify-between">
                    <p className="text-grey-darkest">{name}</p>
                  </div>
                  <p className="text-grey-dark mt-1 text-sm">{phone}</p>
                </div>

                <button
                  onClick={() => props.deleteContact(id)}
                  className="bg-white p-1 mr-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => props.editContact(id, contact)}
                  className="bg-white p-1 mr-3 rounded-full text-gray-400
                  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500"
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>
            )
          })
        ) : (
          <div>No data</div>
        )}
      </div>
    </>
  )
}

export default UserList
