import Link from "next/link";
import React, { useContext } from "react";
import { MainBtn } from "../buttons/MainBtn";
import { Icon } from "../icon/Icon";
import { FaBars } from "react-icons/fa";
import { ImageContainer } from "../image/ImageContainer";
import { GsapAnimation } from "../GsapAnimation";
import FadeIn from "../FadeIn";
import Magnitizer from "../Magnitizer";
import { ActiveMenu } from "@/contexts/activeMenu";
import { useRouter } from "next/router";

export const Navbar = ({ header, logo }) => {
  const router = useRouter();
  const { activeMenu, setActiveMenu } = useContext(ActiveMenu);
  const links = [
    {
      label: "The Experiences",
      path: "#experience",
    },
    {
      label: "Customer Reviews",
      path: "#review",
    },
    {
      label: "About us",
      path: "#about",
    },
    {
      label: "Contact us",
      path: "#contact",
    },
  ];
  return (
    <FadeIn>
      <header className={`${header} _eleWrap`}>
        <nav>
          <div className="container1">
            <div className="logo ">
              <ImageContainer src={logo} />
            </div>

            <ul>
              {links.map((link, index) => (
                <li className="interactive_label" key={index}>
                  <Link className="_shape " href={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar-btns ">
              <MainBtn
                type="submit"
                content="Book Now"
                className="mainBtn interactive_label"
                customClass="_shape"
                onClick={() => router.push("#experience")}
              />
            </div>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
};
