import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

    <div style={{
      width:"220px",
      background:"#111",
      color:"#fff",
      minHeight:"100vh",
      padding:"20px"
    }}>

      <h2>Admin Panel</h2>

      <ul style={{marginTop:"30px",listStyle:"none",padding:0}}>

        <li style={{marginBottom:"15px"}}>
          <Link to="/admin/dashboard" style={{color:"#fff"}}>
            Dashboard
          </Link>
        </li>

        <li style={{marginBottom:"15px"}}>
          <Link to="/admin/notices" style={{color:"#fff"}}>
            Notices
          </Link>
        </li>

        <li style={{marginBottom:"15px"}}>
          <Link to="/admin/gallery" style={{color:"#fff"}}>
            Gallery
          </Link>
        </li>

        <li style={{marginBottom:"15px"}}>
          <Link to="/admin/events" style={{color:"#fff"}}>
            Events
          </Link>
        </li>

        <li style={{marginBottom:"15px"}}>
          <Link to="/admin/fees" style={{color:"#fff"}}>
            Fee Structure
          </Link>
        </li>

      </ul>

    </div>

  )

}

export default Sidebar