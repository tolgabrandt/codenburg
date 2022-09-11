import { ReactComponent as Usflag } from "assets/svg/flag/us.svg";
import { ReactComponent as CaretDown } from "assets/svg/icons/caret-down.svg";

const SwitcherButton = ({ value, height }) => {
  return (
    <nav
      className={` ${height === "sm" ? "h-[40px]" : "h-[48px]"} ${
        value === "dark" ? "bg-gray-800" : "bg-slate-50"
      } bg-gray-800 rounded-md flex items-center`}
    >
      <ul className="w-full">
        <li className="flex items-center justify-between px-6 gap-4 ">
          <div className="flex gap-4 items-center">
            <Usflag className="w-6 h-6" /> <span>England</span>
          </div>
          <CaretDown />
        </li>
      </ul>
    </nav>
  );
};
export default SwitcherButton;
