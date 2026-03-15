import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImages, FaBell, FaCalendarAlt, FaBars } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { motion } from "framer-motion";

const AdminDashboard = () => {

const [sidebarOpen,setSidebarOpen] = useState(false);

const logout = () => {

localStorage.removeItem("adminToken");
window.location.href="/admin-login";

};

return (

<div className="flex min-h-screen bg-gray-100">

{/* HAMBURGER BUTTON */}

<button
onClick={()=>setSidebarOpen(true)}
className="md:hidden fixed top-4 left-4 z-[60] bg-green-800 text-white p-3 rounded-lg shadow-lg"
>
<FaBars size={20}/>
</button>


{/* OVERLAY */}

{sidebarOpen && (

<div
className="fixed inset-0 bg-black/40 z-40 md:hidden"
onClick={()=>setSidebarOpen(false)}
></div>

)}


{/* SIDEBAR */}

<div
className={`
fixed top-0 left-0 h-full w-64
bg-gradient-to-b from-green-800 to-green-900
text-white p-6 shadow-xl
z-50
transform transition-transform duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0 md:static
`}
>

<h2 className="text-2xl font-bold mb-10">
Admin Panel
</h2>

<ul className="space-y-4">

<li>
<Link to="/admin-dashboard" className="block hover:bg-green-700 p-2 rounded">
Dashboard
</Link>
</li>

<li>
<Link to="/admin-notices" className="block hover:bg-green-700 p-2 rounded">
Manage Notices
</Link>
</li>

<li>
<Link to="/admin-gallery" className="block hover:bg-green-700 p-2 rounded">
Gallery
</Link>
</li>

<li>
<Link to="/admin-events" className="block hover:bg-green-700 p-2 rounded">
Event Images
</Link>
</li>

<li>
<Link to="/admin-upcoming-events" className="block hover:bg-green-700 p-2 rounded">
Upcoming Events
</Link>
</li>

<li>
<button
onClick={logout}
className="w-full text-left hover:bg-red-600 p-2 rounded"
>
Logout
</button>
</li>

</ul>

</div>


{/* MAIN CONTENT */}

<div className="flex-1 p-6 md:p-10">

<h1 className="text-2xl md:text-3xl font-bold mb-8">
Hello, Admin Happy to see you again 
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Notices */}

<Link to="/admin-notices">

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition"
>

<FaBell className="text-3xl text-green-700 mb-4"/>

<h3 className="text-lg font-bold text-green-700">
Manage Notices
</h3>

<p className="text-gray-600 mt-2 text-sm">
Add or delete school notices
</p>

</motion.div>

</Link>


{/* Gallery */}

<Link to="/admin-gallery">

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition"
>

<FaImages className="text-3xl text-green-700 mb-4"/>

<h3 className="text-lg font-bold text-green-700">
Gallery
</h3>

<p className="text-gray-600 mt-2 text-sm">
Upload school photos
</p>

</motion.div>

</Link>


{/* Event Images */}

<Link to="/admin-events">

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition"
>

<MdEvent className="text-3xl text-green-700 mb-4"/>

<h3 className="text-lg font-bold text-green-700">
Event Images
</h3>

<p className="text-gray-600 mt-2 text-sm">
Manage event photos
</p>

</motion.div>

</Link>


{/* Upcoming Events */}

<Link to="/admin-upcoming-events">

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition"
>

<FaCalendarAlt className="text-3xl text-green-700 mb-4"/>

<h3 className="text-lg font-bold text-green-700">
Upcoming Events
</h3>

<p className="text-gray-600 mt-2 text-sm">
Add upcoming events
</p>

</motion.div>

</Link>

</div>

</div>

</div>

);

};

export default AdminDashboard;