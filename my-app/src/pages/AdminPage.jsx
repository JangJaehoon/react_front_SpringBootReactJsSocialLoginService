// function AdminPage() {
//   return <div className="home">Admin page입니다.</div>;
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/api/admin/users");
      setUsers(res.data); // 사용자 목록 상태에 저장
    } catch (err) {
      console.error("사용자 목록 불러오기 실패 : ", err);
      alert("사용자 정보를 불러오는 데 실패했습니다.");
      navigate("/");
    }
  };
  useEffect(() => {
    fetchUsers;
  }, []);
  return (
    <div className="home">
      <h2>Admin page입니다.</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminPage;
