import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { BASE_URL } from "../utils/constatnts";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleLogout = async () => {
    axios.post(BASE_URL+"/logout",{},{withCredentials : true})
  }
  return (
    <div className="navbar bg-blue-200 shadow-sm flex justify-between">
      <div className="flex justify-center items-center">
        <img
          src=" ../public/images/logo_cricket.png "
          alt="logo"
          className="w-20 h-20 rounded-full"
        />
        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          Find Your Cricket Bros
        </Link>
      </div>
      <div>
        
      
        {user && (
          <div className="flex gap-2 mx-10 items-center justify-center">
            <p className="mx-4">Welcome, <span>{user.firstName}</span></p>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
