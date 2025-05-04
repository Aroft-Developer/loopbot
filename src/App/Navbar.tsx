interface NavbarProps { 
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ isDark, setIsDark }: NavbarProps) {
  return (
    <>
      <div className={`static flex w-full h-17 items-center font-[Outfit] font-semibold text-lg transition border-b border-solid ${
        isDark ? "bg-white text-[#1d283a] border-b-gray-300" : "bg-[#040712] text-white border-[#1d283a]"
      }`}>
        <div className="flex justify-start w-1/2 pl-10 items-center">
          <img 
            className="h-10 w-10 rounded-full mr-5" 
            src="https://loopbot.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c9382eab.jpg&w=128&q=75" 
            alt="Logo" 
          />
          <a href="/">Loopbot</a>
        </div>

        <div className="flex justify-end w-1/2 items-center ml-10">
          <a className={`duration-300 transition ease-in-out items-center p-2.5 mr-2 rounded-xl border-solid ${
            isDark ? "hover:bg-gray-200" : "hover:bg-[#1d283a]"
          }`} href="https://discord.com/oauth2/authorize?client_id=1064618371255128197&permissions=8&integration_type=0&scope=applications.commands+bot">
            <svg className={`${isDark ? 'fill-[#1d283a]' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            </svg>
          </a>

          <a className={`duration-300 transition ease-in-out items-center p-2.5 mr-2 rounded-xl border-solid ${
            isDark ? "hover:bg-gray-200" : "hover:bg-[#1d283a]"
          }`} href="https://github.com/Aroft-Developer">
            <svg className={`${isDark ? 'fill-[#1d283a]' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
            </svg>
          </a>
          <button 
            onClick={() => setIsDark(d => !d)} 
            className={`cursor-pointer duration-300 transition ease-in-out items-center p-2.5 mr-5 rounded-xl border-solid ${
              isDark ? "hover:bg-gray-200" : "hover:bg-[#1d283a]"
            }`}
          >
            {isDark ? (
              <svg className={`${isDark ? 'fill-[#1d283a]' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
            ) : (
              <svg className={`${isDark ? 'fill-[#1d283a]' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
