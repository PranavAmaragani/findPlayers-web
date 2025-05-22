import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
      try {
        const res = await axios.post("http://localhost:8888/login", {
          emailId,
          password,
        }, { withCredentials: true }
        );
        console.log(res.data); // You can handle response here
      } catch (error) {
        console.log(error);
      }
  };
  
  return (
    <div className="flex w-screen h-[80vh] justify-center items-center">
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <div className="w-1/2 max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <input
            type="email"
            value={emailId}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmailId(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium" onClick={handleLogin}>
            Log in
          </button>

          {
            <div className="mt-6 p-4 bg-black text-white rounded-lg">
              <p className="text-lg"></p>
            </div>
          }
        </div>
      </div>

      <div className="w-1/2 bg-red-100">
        <img src="./images/child_login.webp" className="h-[400px] " />
      </div>
    </div>
  );
};
export default Login;
