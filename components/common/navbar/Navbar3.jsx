import React from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import { HiOutlineMail } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import FadeIn from "../FadeIn";
import Link from "next/link";
import { useRouter } from "next/router";
export const Navbar3 = ({ logo, scroll }) => {
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
      <nav
        class={`navbar navbar-expand-lg navbar-dark bg-body navbar3 fixed-top py-4 ${
          scroll ? "scrolled" : ""
        }`}
      >
        <div class="container3">
          <div
            className="position-relative"
            style={{ width: "10rem", height: "3rem" }}
          >
            <ImageContainer src={logo} />
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav gap-5 mx-auto mb-2 mb-lg-0 ">
              {links.map((link, index) => (
                <li class="nav-item interactive_label" key={index}>
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
              className="mainBtn d-flex justify-content-center gap-2 interactive_label"
              customClass={" _shape words"}
              icon={<HiOutlineMail />}
              onClick={() => router.push("#contact")}
            />
          </div>
        </div>
      </nav>
    </FadeIn>
  );
};
