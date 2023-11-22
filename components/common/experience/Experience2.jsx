import React, { useState } from "react";
import { ExperienceCard2 } from "./ExperienceCard2";
import { ExperienceHeader } from "./ExperienceHeader";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";
export const Experience2 = () => {
  const dummyCard = [
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/IMG2.png",
    },
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/1.jpg",
    },
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/img1.jpg",
    },
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/img1.jpg",
    },
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/img1.jpg",
    },
    {
      title: "Wave Surfing",
      subTitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      time: "20 Minutes",
      role: "from Per Person",
      price: "AED 1,280",
      image: "/img1.jpg",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [lessData, setLessData] = useState("No More Data");
  const [dummyIndex, setDummyIndex] = useState(3);
  console.log(dummyIndex);
  console.log(dummyIndex);
  function loadingData() {
    setLoading(true);
    setTimeout(() => {
      setDummyIndex(dummyIndex + 3);
    }, 3000);
    setTimeout(() => {
      setLoading(false);
      console.log("loding");
    }, 3500);
    setTimeout(() => {
      if (dummyIndex < 0) {
        setLessData("");
      }
    }, 3500);
  }

  return (
    <FadeIn>
      <section className="experience2 _eleWrap" id="experience">
        <div className="container-fluid">
          <ExperienceHeader
            header="The Experiences"
            subHeader="Our experiences are 100% customizable to fit your exact needs"
          />
          <div className="container-card-items d-flex flex-wrap ">
            {dummyCard.map((dummy, index) =>
              index < dummyIndex ? (
                <ExperienceCard2
                  key={index}
                  image={dummy.image}
                  time={dummy.time}
                  cardSubTitle={dummy.subTitle}
                  cardTitle={dummy.title}
                  price={dummy.price}
                  role={dummy.role}
                />
              ) : (
                ""
              )
            )}
            {dummyIndex < 0 ? (
              ""
            ) : (
              <div className={"isLodingExperienceContainer"}>
                <div className={loading ? "isLodingExperience" : ""}></div>
              </div>
            )}
          </div>
          <div className="more-reviewer text-center mt-3">
            {dummyCard.length == 0 ? (
              <div className="emptyData">No Experiences Created Yet</div>
            ) : (
              ""
            )}
            {dummyIndex == dummyCard.length ||
            dummyCard.length == 0 ||
            dummyCard.length < 3 ? (
              ""
            ) : (
              <MainBtn
                content={`More Reviews`}
                className="defaultBtn interactive_label"
                customClass={"_shape"}
                onClick={() => loadingData()}
              />
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
