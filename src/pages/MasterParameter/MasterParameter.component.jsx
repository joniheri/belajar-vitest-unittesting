import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

export default function MasterParameter() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:3001/api/users"
      );
      const newData = response.data.map((item, index) => ({
        ...item,
        no: index + 1,
      }));
      setUsers(newData);
    } catch (error) {
      console.log(error.message);
      throw error.message;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container fluid>
      <h3>Data Parameter</h3>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th className="bg-secondary text-center text-white">No</th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "300px" }}>
              Title
            </th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white">Title</th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "500px" }}>
              Title
            </th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "300px" }}>
              Title
            </th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "300px" }}>
              Title
            </th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "300px" }}>
              Title
            </th>
            <th className="bg-secondary text-white">ID</th>
            <th className="bg-secondary text-white" style={{ width: "300px" }}>
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-center">{item.no}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
