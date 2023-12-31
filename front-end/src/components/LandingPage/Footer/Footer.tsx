import Parents from "../../../assets/images/parents.svg";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={Parents}
              alt="parentsicon"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-3 text-xl">FAM</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 FAM —
          <a
            href=""
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @FAM
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <p> contact-us@yourfam.app</p>
          </a>
          <a className="ml-3 text-gray-500"></a>
          <a className="ml-3 text-gray-500"></a>
          <a className="ml-3 text-gray-500"></a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
