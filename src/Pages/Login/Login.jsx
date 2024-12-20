import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [isUser, setIsUser] = useState(false)

  if(!isUser){
    setIsUser('User not found')
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
    .then((result)=>{
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch((error)=>{
      console.log("ERROR", error.message)
    })
  };
  return (
    <div className="text-center mt-24">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold">Login Now</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>{isUser}</p>
        <div className="flex items-center">
          <p>Don't have an accout?</p>
        <Link to='/register'><span className="text-blue-700 hover:underline">Register Now</span>
        </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
