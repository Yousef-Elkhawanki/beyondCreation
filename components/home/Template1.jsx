import React, { useContext, useEffect, useState, useCallback } from "react";
import { Banner } from "../common/banner/Banner";
import { Experience } from "../common/experience/Experience";
import { Contact } from "../common/contact/Contact";
import { Review } from "../common/review/Review";
import { About } from "../common/about/About";
import { Navbar } from "../common/navbar/Navbar";
import { Footer } from "../common/footer/Footer";
import VideoPopup from "@/components/common/videoPopup/VideoPopup";
import Widget from "../widget/Widget";
import { ExperienceId } from "@/contexts/handleWadgetId";
import { HandleWidget } from "@/contexts/activeWidget";
export const Template1 = () => {
  const { experienceID } = useContext(ExperienceId);
  const { activeWidget } = useContext(HandleWidget);
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

  const footerData = dataFetch?.find(
    (data) => data.section == "footer_section"
  );
  const banner_section = dataFetch?.find(
    (data) => data.section == "banner_section"
  );
  return (
    <>
      {activeWidget ? (
        <Widget id={experienceID} />
      ) : (
        dataFetch && (
          <div className={`template1 ${activeWidget ? "d-none" : ""}`}>
            <VideoPopup />
            <Navbar header="header" logo="/Logo2.svg" />
            <Banner banner_section={banner_section} />
            <Experience />
            <Review
              reviewTitle="Customer Reviews"
              reviewSubTitle="What customers say about us?"
            />
            <About
              imageChild="/about1.jpg"
              imageParent="/about1.jpg"
              aboutHeader="About us"
              aboutSub="We use a rigorous curating
process to assure quality"
            />
            <Contact style="form-control" />
            <Footer footerData={footerData} />
          </div>
        )
      )}
    </>
  );
};
