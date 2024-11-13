import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, emailVerification } = useContext(AuthContext);
  const [password, setPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPassword(
        "At least one uppercase, one lowercase letter, one digit, and one special character are required"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        setSuccess("Registered Successfully");
        console.log(result.user);
        emailVerification()
        .then(()=>{
          alert('Sent a verification Email')
        })
        e.target.reset();
        navigate('/')
      })
      .catch(() => {
        setErrorMessage("User already Exsits");
        return;
      });
  };

  return (
    <div className="text-center mt-24">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl font-bold">Register Now</h1>
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
            {success ? (
              <div className="text-green-700">{success}</div>
            ) : errorMessage ? (
              <div className="text-red-700">{errorMessage}</div>
            ) : password ? (
              <div className="text-red-700">{password}</div>
            ) : null}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <p>Already Have an account?</p>
        <Link to='/login'><span className="text-blue-700 hover:underline">Login</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
