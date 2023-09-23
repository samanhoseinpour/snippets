import { useState } from 'react';

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    try {
      e.preventDefault();

      onUserAdd({ name, email });

      setEmail('');
      setName('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col flex-wrap gap-6 p-12"
    >
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jhon Junior"
          className="rounded-md border-0 py-1.5 p-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@example.com"
          className="rounded-md border-0 py-1.5 p-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button className="border-1 bg-blue-700 text-white px-6 py-4 rounded-full w-40">
        Add User
      </button>
      <hr />
      <hr />
    </form>
  );
};

export default UserForm;
