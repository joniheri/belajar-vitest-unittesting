import { useEffect, useState } from "react";
import axios from "axios";

export default function MasterParameter() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3001/api/users");
  };

  return <div>MasterParameter</div>;
}
