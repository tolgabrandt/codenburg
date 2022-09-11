import { Link, Outlet } from "react-router-dom";
import LogoCareer from "assets/svg/logo/logo-career.svg";
import { ReactComponent as FileICON } from "assets/svg/icons/file.svg";
import { ReactComponent as PersonICON } from "assets/svg/icons/person.svg";
import { ReactComponent as LinkedinICON } from "assets/svg/icons/linkedin.svg";
import { ReactComponent as TwitterICON } from "assets/svg/icons/twitter.svg";
import { ReactComponent as GlobeICON } from "assets/svg/icons/globe.svg";
import { useEffect, useState } from "react";

const Career = () => {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(true);
    }, 600);
  }, []);

  if (!isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loading-full"></div>;
      </div>
    );
  }

  return (
    <>
      <header>
        <div className="max-w-[620px] h-[68px] flex items-center mx-auto justify-between px-4 md:px-0">
          <Link to="/">
            <img src={LogoCareer} alt="Codenburg Career Logo" />
          </Link>
          <Link
            className="text-blue-600 text-sm font-light"
            to="/career/application"
          >
            Don’t see your job?
          </Link>
        </div>
      </header>

      <main className="px-4">
        <section className="max-w-[620px] mx-auto flex  flex-col gap-4">
          <section className="flex gap-4">
            <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-4 rounded-md">
              <FileICON /> SaaS
            </span>

            <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-4 rounded-md">
              <PersonICON /> 5-20
            </span>

            <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-2 rounded-md ">
              <LinkedinICON />
            </span>

            <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-2 rounded-md ">
              <TwitterICON />
            </span>

            <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-2 rounded-md ">
              <GlobeICON />
            </span>
          </section>
          <div className="mt-4 flex flex-col gap-4">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};
export default Career;
