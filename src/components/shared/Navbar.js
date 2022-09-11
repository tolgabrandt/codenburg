import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo/logo.svg";
const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="h-[72px] max-w-[1240px] mx-auto flex items-center justify-between font-light px-6 sm:px-0">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex gap-12 items-center">
          <ul className="sm:flex gap-6 hidden">
            <Link to="offers">
              <li>Offers</li>
            </Link>

            <Link to="career">
              <li>Career</li>
            </Link>
          </ul>
          <button className="bg-blue-50 text-blue-400 h-[40px] px-6 rounded-md font-normal">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
