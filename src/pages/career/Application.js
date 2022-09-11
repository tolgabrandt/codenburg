import { Link } from "react-router-dom";
import { ReactComponent as ChevronICON } from "../../assets/svg/icons/chevron-left.svg";

const Application = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <Link
          className="flex items-center gap-2 text-sm font-light"
          to="/career"
        >
          <ChevronICON /> Back to jobs page
        </Link>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="p-4 bg-blue-50 rounded-md">
          <p className="text-sm font-light text-slate-500">
            If you didn't see the job you were looking for in our current
            openings, please send us your{" "}
            <span className="font-medium">resume </span> and let us know how
            you'd like to contribute. We are always looking for passionate
            people to <span className="text-blue-600">join us.</span>
          </p>
        </div>
        <form className="border border-gray-200 text-sm font-light p-6 flex flex-col gap-4 rounded-xl">
          <h2 className="text-lg font-medium">Application</h2>
          <div className="gap-6 grid sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-200 h-[36px] rounded-md px-4"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-200 h-[36px] rounded-md px-4"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-200 h-[36px] rounded-md px-4 w-full"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="file"
              className="border border-gray-200 h-[36px] rounded-md px-4"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Tell us more about you, why you'd want to join Codenburg, and what
              you'd like to do ?
            </p>
            <textarea
              className="border border-gray-200 rounded-md p-4 w-full h-[240px]"
              placeholder="Answer"
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white rounded-md h-[36px]">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};
export default Application;
