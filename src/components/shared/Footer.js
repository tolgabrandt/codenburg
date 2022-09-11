import Logo from "../../assets/svg/logo/logo.svg";
const Footer = () => {
  return (
    <>
      <footer class="p-4 bg-slate-50 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 font-light ">
        <div class="sm:flex sm:items-center sm:justify-between max-w-[1240px] mx-auto">
          <a
            href="https://github.com/tolgabrandt"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img src={Logo} alt="Codenburg Logo" />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://github.com/tolgabrandt"
                class="mr-4 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tolgabrandt"
                class="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tolgabrandt"
                class="mr-4 hover:underline md:mr-6 "
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="https://github.com/tolgabrandt" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://github.com/tolgabrandt" class="hover:underline">
            Codenburg™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};
export default Footer;
