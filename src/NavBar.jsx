const NavBar = () => {
  return (
    <div className="navbar bg-blue-200 shadow-sm flex justify-between">
      <div className="flex justify-center items-center">
        <img
          src=" ../public/images/logo_cricket.png "
          alt="logo"
          className="w-20 h-20 rounded-full"
        />
        <a className="btn btn-ghost text-2xl font-bold">
          Find Your Cricket Bros
        </a>
      </div>
      <div className="flex gap-2 mx-10">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
