import React, { useState } from 'react'

interface AddContactFormProps {
  addContact: (contact: any) => void
}

const AddContactForm: React.FC<AddContactFormProps> = (props) => {
  const contactPlaceholder = { id: null, name: '', phone: '' }
  const [contact, setContact] = useState(contactPlaceholder)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (contact.name && contact.phone) {
      props.addContact(contact)
      handleChange(e as any)
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center mt-10">
      <h2 className="text-2xl font-semibold text-gray-300">Add</h2>
      <form className="mt-5">
        <label>Name</label>
        <input
          className="w-full px-2 py-2 text-sm text-gray-600"
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          className="w-full px-2 py-2 text-sm text-gray-600"
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
        <button
          className="flex mt-5 rounded-md border border-transparent  py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 px-3"
          type="submit"
          onClick={handleSubmit}
        >
          Add contact
        </button>
      </form>
    </div>
  )
}

export default AddContactForm
