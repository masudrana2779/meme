import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;
