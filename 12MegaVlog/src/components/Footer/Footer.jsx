import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black border-t border-gray-700 shadow-inner">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap text-gray-300">
          
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; 2025 <span className="text-gray-100 font-semibold">@Debanjan Roy</span>. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                {['Features','Pricing','Affiliate Program','Press Kit'].map((item) => (
                  <li key={item} className="mb-3">
                    <Link
                      className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 hover:pl-1 inline-block"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                {['Account','Help','Contact Us','Customer Support'].map((item) => (
                  <li key={item} className="mb-3">
                    <Link
                      className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 hover:pl-1 inline-block"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                {['Terms & Conditions','Privacy Policy','Licensing'].map((item) => (
                  <li key={item} className="mb-3">
                    <Link
                      className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 hover:pl-1 inline-block"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Designed with ❤️ by <span className="text-gray-300 font-medium">Debanjan Roy</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
