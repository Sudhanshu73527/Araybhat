// import AdminLayout from "../layout/AdminLayout";
// import { useState } from "react";

// const Notices = () => {

//   const [title,setTitle] = useState("");
//   const [date,setDate] = useState("");
//   const [desc,setDesc] = useState("");

//   const addNotice = async () => {

//     await fetch("http://localhost:5000/api/notices/add",{

//       method:"POST",

//       headers:{
//         "Content-Type":"application/json"
//       },

//       body:JSON.stringify({
//         title,
//         date,
//         description:desc
//       })

//     });

//     alert("Notice Added");

//   }

//   return(

//     <AdminLayout>

//       <h1 className="text-2xl font-bold mb-6">
//         Add Notice
//       </h1>

//       <input
//       placeholder="Notice Title"
//       className="border p-2 mb-4 block"
//       onChange={(e)=>setTitle(e.target.value)}
//       />

//       <input
//       placeholder="Date"
//       className="border p-2 mb-4 block"
//       onChange={(e)=>setDate(e.target.value)}
//       />

//       <textarea
//       placeholder="Description"
//       className="border p-2 mb-4 block"
//       onChange={(e)=>setDesc(e.target.value)}
//       />

//       <button
//       onClick={addNotice}
//       className="bg-green-700 text-white px-5 py-2"
//       >
//       Add Notice
//       </button>

//     </AdminLayout>

//   )

// }

// export default Notices;