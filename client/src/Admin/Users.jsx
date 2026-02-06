const AdminUsers = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      <div className="bg-white rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">Admin User</td>
              <td className="p-3 text-center">admin@email.com</td>
              <td className="p-3 text-center">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUsers;
