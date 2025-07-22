import axios from "axios";
import { useState } from "react";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("jayant@gmail.com");
  const [password, setPassword] = useState("Jayant@1221");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend"></legend>

            <label className="label">Email </label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500">{error}</p>
            <button className="btn btn-neutral mt-4" onClick={handleLogin}>
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
