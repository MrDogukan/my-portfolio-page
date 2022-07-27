import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside>
      <div
        className="linkedin text-light fs-3 icons d-flex justify-content-between align-items-center
"
      >
        Linkedin{" "}
        <span className="display-5 d-flex align-items-center p-2">
          <BsLinkedin />
        </span>
      </div>
      <div
        className="github text-light fs-3 icons d-flex justify-content-between align-items-center
"
      >
        Github{" "}
        <span className="display-5 d-flex align-items-center p-2">
          <BsGithub />
        </span>
      </div>
      <div
        className="email text-light fs-3 icons d-flex justify-content-between align-items-center
"
      >
        Email{" "}
        <span className="display-5 d-flex align-items-center p-2">
          <BsFillEnvelopeFill />
        </span>
      </div>
      <div
        className="resume text-light fs-3 icons d-flex justify-content-between align-items-center
"
      >
        Resume{" "}
        <span className="display-5 d-flex align-items-center p-2">
          <BsFillPersonLinesFill />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
