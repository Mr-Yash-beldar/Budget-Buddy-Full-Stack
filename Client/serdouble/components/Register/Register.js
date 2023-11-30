import React, { useState } from "react";
import ErrorMessage from "../Error/ErrorMessage";
import "../Login/loginstyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null); // [false, function
  const [error, setError] = useState(null); // [false, function
  const [loading, setLoading] = useState(false); // [false, function
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const chnageHandler = (event) => {
    // console.log(e.target.value);
    const { name, value } = event.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { username, email, password, cpassword } = userData;

    if (username === "") {
      toast.warning("Name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      toast.error("Confirm password is required!", {
        position: "top-center",
      });
    } else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      toast.error("Passwords are not matching!", {
        position: "top-center",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);
        // Make an Axios POST request to your backend
        const response = await axios.post(
          "/api/users",
          {
            username,
            email,
            password,
          },
          config
        );
        setLoading(false);
        if (response.status === 200) {
          setMessage("Registration successful. Redirecting to login page..");
          setUserData({ name: "", email: "", password: "", cpassword: "" });
          navigate("/login");
        }
      
      } catch (error) {
        setError(error.response.data.message);
        console.error("Error during registration:", error);
        
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="bg-img">
        {error && <ErrorMessage message={error}/>}

        {!loading?(
        <div className="content">
          <header>Signup Form</header>
          <form onSubmit={addUserdata}>
            <div className="field">
              <span className="fa fa-user"></span>
              <input
                type="text"
                onChange={chnageHandler}
                value={userData.username}
                name="username"
                required
                placeholder="Username"
              />
            </div>
            <div className="field space">
              <span className="fa fa-user"></span>
              <input
                type="text"
                onChange={chnageHandler}
                value={userData.email}
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                value={userData.password}
                onChange={chnageHandler}
                name="password"
                required
                placeholder=" New Password"
              />
              <span className="show">SHOW</span>
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                value={userData.cpassword}
                onChange={chnageHandler}
                name="cpassword"
                required
                placeholder="Confirm New Password"
              />
              <span className="show">SHOW</span>
            </div>

            <div className="field space">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
          <ToastContainer />
          <div className="login">
            Login Here !<Link to="/dashboard">click here</Link>
          </div>
        </div>
        ):(
          <Spinner/>
        )}
      </div>
    </div>
  );
}

export default Register;
