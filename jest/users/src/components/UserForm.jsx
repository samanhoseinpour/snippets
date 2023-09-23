const UserForm = () => {
  return (
    <div className="flex flex-wrap justify-start flex-col gap-6 p-12">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <input
          placeholder="Jhon Junior"
          className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <input
          placeholder="example@example.com"
          className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button className="border-1 bg-blue-700 text-white px-6 py-4 rounded-full w-40">
        Add User
      </button>
      <hr />
      <hr />
    </div>
  );
};

export default UserForm;
