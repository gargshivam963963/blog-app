import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center flex-col sm:flex-row py-8">
        <a href="/"
          className="flex items-center justify-center md:justify-start"
        >
          <Image width="40" height="35" src="/logo.png" alt="" />

          <span className="ml-3 text-md">Coder's Blog</span>
        </a>

        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-1-2 sm-border-greay-200 sm:py-2 sm:mt-0">
          2022 Coder's blog -

          <a href="https://www.linkedin.com/in/shivam-softwaredev/" >
            @coder'sgyan
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
