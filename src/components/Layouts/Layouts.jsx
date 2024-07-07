import { Outlet } from "react-router-dom";
// import Footer from "../Footer/Footer";

const Layouts = () => {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
