import React, { useContext } from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import { HiOutlineMail } from "react-icons/hi";
import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import { ActiveMenu } from "@/contexts/activeMenu";
import Link from "next/link";
import { useRouter } from "next/router";
export const Navbar2 = ({ logo, scroll }) => {
  const { activeMenu, setActiveMenu } = useContext(ActiveMenu);
  const router = useRouter();
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
      label: "About Us",
      path: "#about",
    },
    {
      label: "Contact Us",
      path: "#contact",
    },
  ];
  return (
    <FadeIn>
      <nav
        class={`navbar navbar-expand-lg navbar-dark bg-transparent navbar2 fixed-top py-4 _eleWrap ${
          scroll ? "scrollBarTwo acitve" : ""
        }`}
      >
        <div class="container-fluid">
          <div
            className="position-relative"
            style={{ width: "10rem", height: "3rem" }}
          >
            <ImageContainer src={logo} />
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {links.map((link, index) => (
                <li class="nav-item interactive_label " key={index}>
                  <Link
                    class="nav-link active _shape"
                    aria-current="page"
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="d-flex gap-3 align-items-center"
            style={{ marginLeft: "4.13rem" }}
          >
            <MainBtn
              content="Contact us"
              className="mainBtn interactive_label"
              customClass={"_shape"}
              icon={<HiOutlineMail />}
              onClick={() => router.push("#contact")}
            />
          </div>
        </div>
      </nav>
    </FadeIn>
  );
};
