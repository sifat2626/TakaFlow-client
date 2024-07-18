import toast from "react-hot-toast";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobileNumber = form.mobileNumber.value;
    const pin = form.pin.value;
    const role = form.role.value;
    const registerData = {
      name,
      email,
      mobileNumber,
      pin,
      role,
    };

    try {
      register(registerData);
      navigate(from, { replace: true });
      toast.success("Register successful");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary-bg min-h-screen pt-4 text-primary px-24">
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-primary text-6xl font-bold">Register</h1>
        </div>
        <form className="card-body w-1/2" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary text-2xl font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered bg-primary-bg border-2 border-primary-light focus:border-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary text-2xl font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered bg-primary-bg border-2 border-primary-light focus:border-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary text-2xl font-semibold">
                Pin (5 digits)
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter pin"
              name="pin"
              pattern="\d{5}"
              className="input input-bordered bg-primary-bg border-2 border-primary-light focus:border-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary text-2xl font-semibold">
                Mobile Number
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              name="mobileNumber"
              className="input input-bordered bg-primary-bg border-2 border-primary-light focus:border-primary"
              required
            />
          </div>

          {/* select role */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary text-2xl font-semibold">
                Select Role
              </span>
            </label>
            <select
              name="role"
              className="select select-bordered w-full bg-primary-bg border-2 border-primary-light focus:border-primary hover:bg-hover-bg transition-all duration-300"
              required
              defaultValue="user"
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          <div className="form-control mt-6">
            <button
              className={`btn bg-primary text-2xl text-white/60 hover:bg-primary-light transition-all duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
