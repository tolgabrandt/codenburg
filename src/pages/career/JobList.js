import { Link } from "react-router-dom";
import { ReactComponent as GeoICON } from "../../assets/svg/icons/geo-alt-fill.svg";
import { ReactComponent as ShareICON } from "../../assets/svg/icons/share-fill.svg";

const JobList = () => {
  return (
    <>
      <section className="flex gap-4 ">
        <input
          type="text"
          placeholder="Search job"
          className="border border-gray-200 h-[32px] rounded-md px-4 font-light text-sm w-full"
        />
        <select className="border border-gray-200 h-[32px] rounded-md px-4 font-light text-sm">
          <option>All departmants</option>
        </select>
      </section>
      <section className="flex flex-col gap-4">
        <ul className="flex flex-col gap-4">
          <li className="border border-gray-200 p-4 rounded-md text-sm font-light">
            <div className="flex flex-col gap-4">
              <header className="flex items-center justify-between">
                <h1 className="text-lg font-medium">Front-end Developer</h1>
                <span className="text-slate-400">2 day ago</span>
              </header>

              <article>
                <p className="text-slate-500">
                  Tibbo's mission is to make IoT accessible to everyone. From
                  small businesses turning on lights to multinationa
                  conglomerates automating
                </p>
              </article>

              <nav className="flex justify-between">
                <div className="flex gap-2">
                  <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-4 rounded-md">
                    <GeoICON /> Remote
                  </span>
                  <span className="bg-slate-50 inline-flex items-center gap-2 text-sm font-light h-[24px] px-4 rounded-md">
                    <ShareICON /> Share this job
                  </span>
                </div>
                <div>
                  <span className="bg-green-50 text-green-500 inline-flex items-center gap-2 text-sm font-light h-[24px] px-4 rounded-md">
                    Active
                  </span>
                </div>
              </nav>
            </div>
          </li>
        </ul>
        <div className="text-sm flex flex-col gap-2 text-center">
          <p>We are always looking for passionate people to join us.</p>
          <Link className="text-blue-600" to="application">
            Application Form
          </Link>
        </div>
      </section>
    </>
  );
};
export default JobList;
