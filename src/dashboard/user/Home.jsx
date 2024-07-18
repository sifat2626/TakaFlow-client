import useAuth from "../../hooks/useAuth";

function Home() {
  const { logout } = useAuth();
  return (
    <div>
      <h2>Home</h2>
      <button>logout</button>
    </div>
  );
}

export default Home;
