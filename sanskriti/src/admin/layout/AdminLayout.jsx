import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        {children}
      </div>

    </div>

  );

};

export default AdminLayout;