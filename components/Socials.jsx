import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  
} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export const socialData = [
 
  {
    name: "Instagram",
    link: "https://www.instagram.com/nitinngrover?igsh=MWsxMGU2MWdmbHhrNQ%3D%3D&utm_source=qr",
    Icon: RiInstagramLine,
  },
  {
    name: "Linkedin",
    link: "http://www.linkedin.com/in/nitingrover1616",
    Icon: FaLinkedinIn
  },
 
  
 
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
