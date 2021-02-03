import React, { useState } from 'react'

interface EditContactFormProps {
  currentContact: any
  updateContact: (contact: any) => void
  setEditing: (state: boolean) => void
}

const EditContactForm: React.FC<EditContactFormProps> = (props) => {
  const [contact, setContact] = useState(props.currentContact)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (contact.name && contact.phone) props.updateContact(contact)
  }

  return (
    <div className="flex flex-col flex-1 justify-center mt-10">
      <h2 className="text-2xl font-semibold text-gray-300">Add</h2>
      <form>
        <label>Name</label>
        <input
          className="w-full px-2 py-2 text-sm text-gray-600"
          type="text"
          value={contact.name}
          name="name"
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          className="w-full px-2 py-2 text-sm text-gray-600"
          type="text"
          value={contact.phone}
          name="phone"
          onChange={handleChange}
        />
        <button
          className="flex mt-5 rounded-md border border-transparent  py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 px-3"
          type="submit"
          onClick={handleSubmit}
        >
          Edit contact
        </button>
        <button
          className="flex mt-5 rounded-md border border-transparent  py-3 bg-gray-500 text-base font-medium text-black shadow px-3"
          type="submit"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditContactForm
