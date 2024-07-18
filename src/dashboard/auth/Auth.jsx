import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center items-center">
      <div className="">
        <img
          src="/taka-flow.png"
          alt=""
          className="w-32 h-32 mx-auto mb-8 rounded-full"
        />
        <Link
          to={"/login"}
          className="block text-center border-2 border-secondary md:w-96 w-72 py-2 font-meri font-semibold text-2xl rounded-lg hover:bg-[#254e49] transition-all duration-300"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="mt-4 block text-center border-2 border-secondary md:w-96 w-72 py-2 font-meri font-semibold text-2xl rounded-lg hover:bg-[#254e49] transition-all duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Auth;
