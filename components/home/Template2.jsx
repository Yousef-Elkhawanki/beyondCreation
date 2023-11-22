import React, { useCallback, useContext, useEffect, useState } from "react";
import { Navbar } from "../common/navbar/Navbar";
import { Banner2 } from "../common/banner/Banner2";
import { Navbar2 } from "../common/navbar/Navbar2";
import { Experience2 } from "../common/experience/Experience2";
import { Review2 } from "../common/review/Review2";
import { About, About2 } from "../common/about/About2";
import { Contact } from "../common/contact/Contact";
import { Footer } from "../common/footer/Footer";
import { Footer2 } from "../common/footer/Footer2";
import { Contact2 } from "../common/contact/Contact2";
import { ResponsiveMenu } from "../common/navbar/ResponsiveMenu";
import Widget from "../widget/Widget";
import { ExperienceId } from "@/contexts/handleWadgetId";
import { HandleWidget } from "@/contexts/activeWidget";
import VideoPopup from "../common/videoPopup/VideoPopup";
export const Template2 = () => {
  const { experienceID } = useContext(ExperienceId);
  const { activeWidget } = useContext(HandleWidget);
  const [scroll, setScroll] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  const [dataFetch, setDataFetch] = useState();
  // api Fetch
  const fetchTemplateData = useCallback(() => {
    fetch(
      "https://dev.api.xplor.beyond-creation.net/api/template?operator_id=1"
    )
      .then((res) => res.json())
      .then((res) => setDataFetch(res.data));
  }, [dataFetch]);
  useEffect(() => {
    fetchTemplateData();
  }, []);
  return (
    <>
      {activeWidget ? (
        <Widget id={experienceID} />
      ) : (
        dataFetch && (
          <div className={`template2 ${activeWidget ? "d-none" : ""}`}>
            <VideoPopup />
            <Navbar2 logo="/Logo.svg" scroll={scroll} />
            <Banner2
              bannerHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              bannerDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
            />
            <Experience2 />
            <Review2
              reviewTitle="Customer Reviews"
              reviewSubTitle="What customers say about us?"
            />
            <About2
              aboutHeader="About us"
              aboutSub="We use a rigorous curating
                    process to assure quality"
              imageChild="/BG.png"
              imageParent="/BG.png"
              listHeader="Lorem ipsum dolor sit amet consectetur"
            />
            <Contact2 style="form-control form-radius" />
            <Footer2 />
          </div>
        )
      )}
    </>
  );
};
