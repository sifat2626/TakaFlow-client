import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="font-lato min-h-screen">
      <Outlet />
      <Toaster />
    </div>
  );
}

export default Root;
