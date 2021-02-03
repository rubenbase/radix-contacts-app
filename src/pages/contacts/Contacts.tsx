/* tslint:disable */
import React, { useEffect, useState, Props } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import Store from '../../utils/store'
import UserList from '../../components/contact-list'
import AddContactForm from '../../components/add-contact-form'
import EditContactForm from '../../components/edit-contact-form/EditContactForm'

// TODO: Use the store instead of dummyData
// const store = new Store()

// NOTE: Please provide a method for editing existing contacts.  All fields should be editable.
// Those 2 fields would behave in the same way, so for time concerns I'm keeping it simple
// TODO: Update the CRUD actions to be performed within the store
const dummyData = [
  {
    id: 1,
    name: 'Electra',
    phone: '2222232232',
  },
  {
    id: 2,
    name: 'Gatsby',
    phone: '2342342324242',
  },
]

const Contacts: React.FC = () => {
  const initialContact = { id: null, name: '', phone: '' }
  const [contacts, setContacts] = useState(dummyData)
  const [currentContact, setCurrentContact] = useState(initialContact)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    // TODO: Replace dummyData with the store data
    // const contacts = store.get('contacts')
  })

  // TODO: Adding add form panel
  // const toggleAddContactView = () => {}

  const addContact = (contact: any) => {
    contact.id = contacts.length + 1
    setContacts([...contacts, contact])
  }

  const deleteContact = (id: number) =>
    setContacts(contacts.filter((contact) => contact.id !== id))

  const editContact = (id: number, contact: any) => {
    setEditing(true)
    setCurrentContact(contact)
  }

  const updateContact = (newContact: any) => {
    setContacts(
      contacts.map((contact: any) =>
        contact.id === currentContact.id ? newContact : contact
      )
    )
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-900">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-96">
          {/* Sidebar component */}
          <div className="flex flex-col flex-1 border-r">
            <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 ">
              <Logo />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              {/* Search  */}
              <div className="bg-grey-lightest">
                <input
                  type="text"
                  className="w-full px-2 py-2 text-sm text-gray-600"
                  placeholder="Search contacts"
                />
              </div>

              <UserList
                contacts={contacts}
                deleteContact={deleteContact}
                editContact={editContact}
              />

              <div className="p-3 flex items-center ">
                {/* <button
                  TODO: When clicked toggle the add form view
                  onClick={toggleAddContactView}
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-300">Contacts</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {editing ? (
                <EditContactForm
                  currentContact={currentContact}
                  setEditing={setEditing}
                  updateContact={updateContact}
                />
              ) : (
                <AddContactForm addContact={addContact} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Contacts
