const UserShow = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div
          className="relative overflow-x-auto shadow-md sm:rounded-lg"
          key={user.email}
        >
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-s text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default UserShow;
