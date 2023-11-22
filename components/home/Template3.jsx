import React, { useCallback, useContext, useEffect, useState } from "react";
import { Navbar3 } from "../common/navbar/Navbar3";
import { Banner3 } from "../common/banner/Banner3";
import { Experience3 } from "../common/experience/Experience3";
import { Review3 } from "../common/review/Review3";
import { About3 } from "../common/about/About3";
import { Footer3 } from "../common/footer/Footer3";
import { Contact3 } from "../common/contact/Contact3";
import { ExperienceId } from "@/contexts/handleWadgetId";
import Widget from "../widget/Widget";
import { HandleWidget } from "@/contexts/activeWidget";
import { baseUrl, request } from "@/utils/TemplateFetchData";
import { useQuery } from "react-query";
import axios from "axios";
import VideoPopup from "../common/videoPopup/VideoPopup";

export const Template3 = () => {
  const { activeWidget } = useContext(HandleWidget);
  const { experienceID } = useContext(ExperienceId);
  const [dataFetch, setDataFetch] = useState();
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
  return activeWidget ? (
    <Widget id={experienceID} />
  ) : (
    dataFetch && (
      <div className={`template3 ${activeWidget ? "d-none" : ""}`}>
        <VideoPopup />
        <Navbar3 scroll={scroll} logo="/Logo2.svg" />
        <Banner3 banner_section={banner_section} />
        <Experience3 />
        <Review3
          reviewTitle="Customer Reviews"
          reviewSubTitle="What customers say about us?"
        />
        <About3
          aboutHeader="About us"
          aboutSub="We use a rigorous curating
          process to assure quality"
          imageChild="/2.jpg"
          imageParent="/about1.jpg"
          listHeader="Lorem ipsum dolor sit amet consectetur"
        />
        <Contact3 style="form-control" addtionStyle={"1"} />
        <Footer3 />
      </div>
    )
  );
};
