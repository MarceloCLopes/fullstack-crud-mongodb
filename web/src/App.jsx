import { Route, Routes } from "react-router-dom";
import { UserAdd } from "./components/UserAdd";
import { UserEdit } from "./components/UserEdit";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<UserAdd />} />
        <Route path="edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;
