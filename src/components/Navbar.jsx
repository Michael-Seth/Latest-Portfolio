function Navbar() {
  return (
    <header className="bg-white" id="myHeader">
      <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <span className="lg:text-lg uppecase focus:ring-0">
                windstatic
              </span>
            </a>
            <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className="hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
            <a
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
              href="#"
            >
              About
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Contact
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Documentation
            </a>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              <div
                className="relative flex-shrink-0 ml-5"
                x-data="{ open: false }"
              >
                <div>
                  <button
                    type="button"
                    className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    id="user-menu-button"
                    ariaExpanded="false"
                    ariaHaspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  x-show="open"
                  x-transition:enter="transition ease-out duration-100"
                  x-transition:enterStart="transform opacity-0 scale-95"
                  x-transition:enterend="transform opacity-100 scale-100"
                  x-transition:leave="transition ease-in duration-75"
                  x-transition:leaveStart="transform opacity-100 scale-100"
                  x-transition:leaveEnd="transform opacity-0 scale-95"
                  className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  ariaOrientation="vertical"
                  ariaLabelledby="user-menu-button"
                  tabindex="-1"
                  style="display: none;"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
              <button className="inline-flex items-center justify-center p-4 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-blue-900">
                <ion-icon
                  name="add-outline"
                  role="img"
                  className="md hydrated"
                  ariaLabel="add outline"
                ></ion-icon>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
