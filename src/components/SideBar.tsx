import classNames from "classnames";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
const SideBar = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (e: boolean) => void;
}) => {
  return (
    <div
      className={classNames(
        "px-6 pt-16 fixed shadow-md rounded top-0 left-0 w-8/12 h-full overflow-auto bg-white transition-all duration-[0.5s] ease-in",
        { "translate-x-[0%] opacity-100": active },
        { "translate-x-[-100%] opacity-0": !active }
      )}
    >
      <div className="flex items-center justify-end">
        <MdOutlineClose
          className="text-darkGray"
          size={36}
          onClick={() => setActive(false)}
        />
      </div>

      <ul className="flex flex-col w-full gap-y-5 text-sm">
        <li className="w-full py-2">Products</li>
        <li className="w-full py-2">Portfolio</li>
        <li className="w-full py-2">Services</li>
        <li className="w-full py-2">About</li>
      </ul>
    </div>
  );
};

export default SideBar;
