import { socialMedia } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full pb-5 font-poppins text-white px-16">
      <div className="flex mt-4 md:flex-row flex-col justify-between items-center">
        <div className="text-sm font-light flex flex-col items-center sm:flex-row sm:gap-1">
        <p>© 2025 Kshitiz Vardhan | Meetify</p>
        {/* <span className="hidden sm:block">|</span> */}
        {/* <p>All rights reserved.</p> */}
        </div>

        <div className="flex items-center md:gap-3 gap-6 mt-5 sm:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 "
            >
                <a href={info.link}>
                    <img src={info.img} alt="icons" width={20} height={20} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;