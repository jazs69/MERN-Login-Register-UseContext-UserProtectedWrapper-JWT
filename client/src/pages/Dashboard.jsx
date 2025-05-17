import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user?.firstname || "Guest"}!</h1>
    </div>
  );
};

export default Dashboard;
