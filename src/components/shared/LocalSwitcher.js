import { useState } from "react";
import { ReactComponent as X } from "assets/svg/icons/x.svg";
import SwitcherButton from "components/dropdown/SwitcherButton";

const LocalSwitcher = () => {
  const [openSwitcher, setOpenSwitcher] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  if (openSwitcher) {
    return (
      <section className="bg-gray-900">
        <div className="max-w-[1240px] flex justify-between items-center mx-auto text-gray-100 h-[72px] gap-8 px-6 text-sm">
          <section className="sm:block hidden font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </section>
          <section className="flex-auto flex justify-end gap-4">
            <div className="max-w-[240px] flex-auto">
              <div
                className="cursor-pointer"
                onClick={(e) => setOpenMenu(!openMenu)}
              >
                <SwitcherButton height="sm" value="dark" />
              </div>
              {openMenu && (
                <div className="bg-white border border-gray-200 absolute top-[72px] rounded-md w-[240px]">
                  <ul className="text-gray-900">
                    <li className="p-4 hover:bg-gray-50 cursor-pointer">
                      England
                    </li>
                    <li className="p-4 hover:bg-gray-50 cursor-pointer">
                      Turkey
                    </li>
                    <li className="p-4 hover:bg-gray-50 cursor-pointer">
                      KKTC
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="bg-blue-600 h-[40px] px-4 rounded-md">
              Continue
            </button>
            <button
              onClick={(e) => setOpenSwitcher(false)}
              className="flex items-center"
            >
              <X />
            </button>
          </section>
        </div>
      </section>
    );
  }
};
export default LocalSwitcher;
