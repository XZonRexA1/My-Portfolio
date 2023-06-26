import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
