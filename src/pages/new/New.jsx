import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = ({ inputs, title }) => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        New
      </div>
    </div>
  );
};

export default New;
