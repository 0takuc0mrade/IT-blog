import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      {/* footer section */}
      <footer className="hidden md:block lg:block footer bg-gray-100 text-black dark:bg-slate-900 dark:text-white">
        <div className="w-full text-black">
          {/* footer for medium and larger screens */}
          <div className="max-w-screen-2xl mx-auto text-gray-900 dark:text-white">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
              {/* section1 */}
              <div className="flex flex-col">
                <a href="" className="font-semibold mb-4">
                  About
                </a>
                <p className="font-sans font-extralight mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, sed iusto labore obcaecati harum quisquam iure
                  aspernatur facere
                </p>

                <p>
                  Email:{' '}
                  <a href="" className="font-extralight">
                    @gmail.com
                  </a>
                </p>

                <p>
                  Phone:{' '}
                  <a href="" className="font-extralight">
                    **********
                  </a>
                </p>
              </div>

              {/* section2 */}
              <div className="flex flex-col">
                <a href="" className="font-sans font-semibold mb-4">
                  Quick Link
                </a>

                <a href="" className="font-light hover:text-blue-500">
                  Home
                </a>
                <a href="" className="font-light hover:text-blue-500 mt-4">
                  About
                </a>
                <a href="" className="font-light hover:text-blue-500 mt-4">
                  Blog
                </a>
                <a href="" className="font-light hover:text-blue-500 mt-4">
                  Archived
                </a>
                <a href="" className="font-light hover:text-blue-500 mt-4">
                  Author
                </a>
                <a href="" className="font-light hover:text-blue-500 mt-4">
                  Contact
                </a>
              </div>

              {/* newsletter */}
              <div className="md:col-span-1 lg:col-span-1 p-4 flex flex-col bg-white rounded-lg shadow-sm dark:bg-slate-800 md:w-full">
                <form className="flex flex-col justify-center items-center md:w-full">
                  <h3 className="font-bold mb-3">Weekly Newsletter</h3>
                  <p className="font-extralight mb-6 md:mb-4 text-center">
                    Get blog articles and offers via email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="p-2 rounded text-gray-700 bg-white dark:bg-slate-800 dark:text-white border w-full"
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-400 transition w-full h-12 mt-3"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <hr className="mt-16 h-0.5 bg-black mx-4" />

            <div className="flex flex-col md:flex-row justify-between mt-5 gap-4 px-4 pb-4">
              <div>
                <nav>
                  <a href="">
                    <img src="" alt="" />
                  </a>
                  <p>&copy; IT Blog 2024. All rights Reserved</p>
                </nav>
              </div>

              <div className="flex">
                <nav className="flex">
                  <ul className="flex flex-col md:flex-row gap-4">
                    <li>
                      <a href="">Term of Use</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Cookie Policy</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer section for small screen */}
      <footer className="block md:hidden lg:hidden bg-gray-200 text-black dark:bg-slate-900 dark:text-white w-full px-5">
        <div className="w-full">
          {/* footer for small screens */}
          <div className="w-full text-gray-900 dark:text-white">
            <div className="space-y-8">
              {/* section1 for small screens */}
              <div className="flex flex-col">
                <a href="" className="font-semibold mb-3 text-xl">
                  About
                </a>
                <p className="font-sans font-extralight mb-3 dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, sed iusto labore obcaecati harum quisquam iure
                  aspernatur facere
                </p>

                <p>
                  Email:{' '}
                  <a href="" className="font-extralight">
                    @gmail.com
                  </a>
                </p>

                <p>
                  Phone:{' '}
                  <a href="" className="font-extralight">
                    **********
                  </a>
                </p>
              </div>

              {/* section2 for small screens */}
              <div className="flex flex-col">
                <a href="" className="font-sans font-semibold text-xl mb-4">
                  Quick Link
                </a>

                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Home
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Archived
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Author
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Contact
                </a>
              </div>

              {/* newsletter for small screens */}
              <div className="p-4 flex flex-col bg-white rounded-lg shadow-sm dark:bg-slate-800">
                <form className="flex flex-col justify-center items-center">
                  <h3 className="font-bold mb-3">Weekly Newsletter</h3>
                  <p className="font-extralight mb-10 text-center">
                    Get blog articles and offers via email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="p-2 rounded text-gray-700 bg-white dark:bg-slate-800 dark:text-white border w-full"
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-400 transition w-full h-14 mt-10"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <hr className="mt-16 h-0.5 bg-black" />

            <div className="flex flex-col gap-4 py-5">
              <div>
                <nav>
                  <a href="">
                    <img src="#" alt="IT Blog" />
                  </a>
                  <p className="font-extralight text-sm mt-4">
                    &copy; IT Blog 2024. All rights Reserved
                  </p>
                </nav>
              </div>

              <div className="font-extralight text-sm">
                <nav>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="">Term of Use</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Cookie Policy</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
