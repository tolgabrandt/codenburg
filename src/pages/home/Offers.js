import { ReactComponent as CheckICON } from "../../assets/svg/icons/check-circle-fill.svg";
import { ReactComponent as HeroBrandBG } from "../../assets/svg/bg/hero-brands.svg";
import { ReactComponent as HalfCircleBG } from "../../assets/svg/bg/half-circle-blue.svg";
import { ReactComponent as DottedCircleBG } from "../../assets/svg/bg/dotted-circle-green.svg";
const Offers = () => {
  return (
    <section className="px-6 flex items-center py-0 sm:py-8">
      <div className="max-w-[1240px] mx-auto py-8 grid sm:grid-cols-2 gap-16 sm:gap-32">
        <section className="flex flex-col gap-6">
          <h1 className="heading-2">
            Fill out the form to get an offer about our products and we will
            call you.
          </h1>
          <p className="section-text">
            You can give us detailed information and get a price quote for your
            projects. Please fill in all fields and write the project you have
            in mind in detail
          </p>
          <ul className="flex flex-col gap-4 font-light text-sm text-slate-600">
            <li className="flex  items-center gap-2">
              <CheckICON /> Laborum, laudantium modi maxime iste sunt eos animi.
            </li>
            <li className="flex  items-center gap-2">
              <CheckICON /> Sequi itaque deleniti repellat dolorum voluptatem
              distinctio,
            </li>
            <li className="flex  items-center gap-2">
              <CheckICON /> Recusandae dolorem non quas fuga aperiam voluptate!
            </li>
          </ul>
        </section>
        <section className="relative ">
          <section className="p-6 sm:p-8 border border-gray-200 bg-white rounded-lg flex flex-col gap-6 ">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">
                <span className="font-medium">Offer Form</span>
              </h1>
              <p className="section-text text-base">
                Your brand secusandae dolorem non quas fuga aperiam voluptate!
              </p>
            </div>
            <form className="flex flex-col gap-6 font-light">
              <div className="gap-6 grid sm:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <label>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 h-[48px] px-6 rounded-md w-full"
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label>
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 h-[48px] px-6 rounded-md w-full"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="gap-6 grid sm:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <label>
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 h-[48px] px-6 rounded-md w-full"
                    placeholder="Phone number"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label>
                    E-Mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 h-[48px] px-6 rounded-md w-full"
                    placeholder="E-Mail address"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-4">
                  <label>
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="bg-slate-50 w-full p-6 h-[180px]"
                    placeholder="Description"
                  />
                </div>
              </div>
              <button className="h-[48px] bg-blue-600 text-white px-6 rounded-md">
                Get a offer
              </button>
            </form>
          </section>
          <div className="absolute top-2/4 right-[-55px] -z-20 hidden sm:block">
            <HalfCircleBG />
          </div>

          <div className="absolute top-12 left-[-55px] -z-20 hidden sm:block">
            <DottedCircleBG />
          </div>
        </section>
      </div>
    </section>
  );
};
export default Offers;
