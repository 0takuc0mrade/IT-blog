import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      {/* footer section */}
      <footer className="hidden lg:flex footer bg-gray-100 text-black dark:bg-slate-900 dark:text-white ">
        <div className="w-screen  text-black ">
          {/* footer for larger screens */}
          <div className="  max-w-screen-2xl justify-center    mx-auto text-gray-900 dark:text-white hidden lg:flex flex-col md:hidden">
            <div className="flex  max-w-screen-2xl justify-around foot">
              {/* section1 for larger screens */}
              <div className="w-96  flex flex-col">
                <a href="" className="font-semibold mb-4">
                  About
                </a>
                <p className="w-48 font-sans font-extralight mb-8">
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

              {/* section2 for larger screens */}
              <div className="w-48 flex-col flex">
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

              {/* section 3 for larger screens */}
              <div className="w-48 flex-col flex">
                <a href="" className="font-sans font-semibold mb-4">
                  Category
                </a>

                <a href="" className="font-light hover:text-blue-500">
                  Lifestyle
                </a>
                <a href="" className="mt-4 font-light hover:text-blue-500">
                  Technology
                </a>
                <a href="" className="mt-4 font-light hover:text-blue-500">
                  Travel
                </a>
                <a href="" className="mt-4 font-light hover:text-blue-500">
                  Business
                </a>
                <a href="" className="mt-4 font-light hover:text-blue-500">
                  Economy
                </a>
                <a href="" className="mt-4 font-light hover:text-blue-500">
                  Sports
                </a>
              </div>

              {/* newletter for larger screens */}
              <div className="w-96 p-4 flex flex-col bg-white rounded-lg shadow-sm  dark:bg-slate-800 ">
                <form className="flex flex-col justify-center items-center">
                  <h3 className="font-bold mb-3">Weekly Newletter</h3>
                  <p className="font-extralight mb-10">
                    Get blog articles and offers via email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="p-2 rounded text-gray-700 bg-white dark:bg-slate-800 dark:text-white border w-64 "
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-400 transition w-64 h-14 mt-3"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <hr className="mt-16 h-0.5 bg-black max-w-screen-2xl justify-center items-center" />

            <div className="flex justify-between mt-5">
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
                  <ul className="flex">
                    <li>
                      <a href="">Term of Use</a>
                    </li>
                    <li>
                      <a href="">Term of Use</a>
                    </li>
                    <li>
                      <a href="">Term of Use</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer section for small screen */}
      <footer className="lg:hidden md:hidden  bg-gray-200 text-black dark:bg-slate-900 dark:text-white w-full pl-5 ">
        <div className="w-full">
          {/* footer for small screens */}
          <div className="  w-fit  text-gray-900 dark:text-white">
            <div className="w-36 ">
              {/* section1 for small screens */}
              <div className="  flex flex-col">
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
              <div className="w-48  flex flex-col">
                <a
                  href=""
                  className="font-sans font-semibold text-xl mt-16 mb-4"
                >
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
                  className="font-light hover:text-blue-500 m dark:text-slate-300"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500  dark:text-slate-300"
                >
                  Archived
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500  dark:text-slate-300"
                >
                  Author
                </a>
                <a
                  href=""
                  className="font-light hover:text-blue-500  dark:text-slate-300"
                >
                  Contact
                </a>
              </div>

              {/* section 3 for small screens */}
              <div className=" flex flex-col">
                <a
                  href=""
                  className="font-sans font-semibold text-xl mt-16 mb-4"
                >
                  Category
                </a>

                <a
                  href=""
                  className="font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Lifestyle
                </a>
                <a
                  href=""
                  className=" font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Technology
                </a>
                <a
                  href=""
                  className=" font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Travel
                </a>
                <a
                  href=""
                  className=" font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Business
                </a>
                <a
                  href=""
                  className=" font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Economy
                </a>
                <a
                  href=""
                  className=" font-light hover:text-blue-500 dark:text-slate-300"
                >
                  Sports
                </a>
              </div>

              {/* newletter for small screens */}
              <div className="w-72 smallnews p-4 flex flex-col bg-white rounded-lg shadow-sm  dark:bg-slate-800 mt-16 ">
                <form className=" flex flex-col justify-center items-center">
                  <h3 className="font-bold mb-3">Weekly Newletter</h3>
                  <p className="font-extralight mb-10">
                    Get blog articles and offers via email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="p-2 rounded text-gray-700 bg-white dark:bg-slate-800 dark:text-white border w-64 "
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-400 transition w-64 h-14 mt-10"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <hr className="mt-16 h-0.5 bg-black max-w-screen-2xl justify-center items-center" />

            <div className="flex justify-between mt-5">
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

              <div className="flex font-extralight text-sm">
                <nav className="flex">
                  <ul className="flex smaln">
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
