import { useCallback, useEffect, useState } from "react";

const WidgetTabs = ({ experienceData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);
  const tabs = ["Description", "Itinerary", "Pick-up"];
  const specs = [
    "Members-only content",
    "Unlimited templates",
    "API integration",
    "legal protections",
    "Cancel anytime",
  ];
  const exclusion = [
    "Members-only content",
    "Unlimited templates",
    "API integration",
  ];
  const faqs = [
    {
      title: "Cillum dolore eu fugiat nulla pariatur?",
      desc: "Cillum dolore eu fugiat nulla pariatur?",
    },
    {
      title: "Cillum dolore eu fugiat nulla pariatur?",
      desc: "Cillum dolore eu fugiat nulla pariatur?",
    },
    {
      title: "Cillum dolore eu fugiat nulla pariatur?",
      desc: "Cillum dolore eu fugiat nulla pariatur?",
    },
    {
      title: "Cillum dolore eu fugiat nulla pariatur?",
      desc: "Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur? Cillum dolore eu fugiat nulla pariatur?",
    },
  ];
  const [includedText, setIncludedText] = useState([]);
  const [excludedText, setExcludedText] = useState([]);
  const [includedOrderedLists, setIncludedOrderedLists] = useState([]);
  const [excludedOrderedLists, setExcludedOrderedLists] = useState([]);

  const splitHTMLContent = (data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const paragraphElements = Array.from(doc.querySelectorAll("p"));
    const paragraphs = paragraphElements.map((element) => element.innerHTML);

    const orderedListElements = Array.from(doc.querySelectorAll("li"));
    const orderedLists = orderedListElements.map(
      (element) => element.innerHTML
    );
    if (data === experienceData?.included_in_fees) {
      setIncludedText(paragraphs);
      setIncludedOrderedLists(orderedLists);
    }
    if (data === experienceData?.excluded_from_fees) {
      setExcludedOrderedLists(orderedLists);
      setExcludedText(paragraphs);
    }
  };

  useEffect(() => {
    splitHTMLContent(experienceData?.included_in_fees);
    splitHTMLContent(experienceData?.excluded_from_fees);
  }, [experienceData]);
  return (
    <div className="widget-tabs">
      {/* <div className="tabs-container">
                <ul>
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            className={`${activeTab === index && 'active bold'}`}
                            onClick={() => setActiveTab(index)}>{tab}</li>
                    ))}
                </ul>
            </div>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div> */}
      <div className="description">
        {experienceData?.included_in_fees && <h2>What is included?</h2>}
        {includedText.length > 0 && (
          <p className="text">
            {includedText?.map((item, index) => (
              <span dangerouslySetInnerHTML={{ __html: item }} key={index} />
            ))}
          </p>
        )}
        {includedOrderedLists.length > 0 && (
          <div className="specs">
            {includedOrderedLists?.map((item, index) => (
              <div className="spec" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  viewBox="0 0 20 33"
                  fill="none"
                >
                  <path
                    d="M17.6304 14.3955C18.1232 14.8822 18.1232 15.734 17.6304 16.2207L7.92698 26.6045C7.47213 27.1318 6.67614 27.1318 6.22129 26.6045L1.36957 21.4126C0.876812 20.9259 0.876812 20.0741 1.36957 19.5874C1.82441 19.0601 2.6204 19.0601 3.07525 19.5874L7.05518 23.8463L15.9247 14.3955C16.3796 13.8682 17.1756 13.8682 17.6304 14.3955Z"
                    fill="#005CBB"
                  />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        )}
        {experienceData?.excluded_from_fees && <h2>Exclusion</h2>}
        {excludedText.length > 0 && (
          <p className="text">
            {excludedText?.map((item, index) => (
              <span dangerouslySetInnerHTML={{ __html: item }} key={index} />
            ))}
          </p>
        )}
        {excludedOrderedLists.length > 0 && (
          <div className="specs">
            {excludedOrderedLists?.map((item, index) => (
              <div className="spec" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  viewBox="0 0 20 33"
                  fill="none"
                >
                  <path
                    d="M17.6304 14.3955C18.1232 14.8822 18.1232 15.734 17.6304 16.2207L7.92698 26.6045C7.47213 27.1318 6.67614 27.1318 6.22129 26.6045L1.36957 21.4126C0.876812 20.9259 0.876812 20.0741 1.36957 19.5874C1.82441 19.0601 2.6204 19.0601 3.07525 19.5874L7.05518 23.8463L15.9247 14.3955C16.3796 13.8682 17.1756 13.8682 17.6304 14.3955Z"
                    fill="#005CBB"
                  />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        )}
      </div>
      {experienceData?.what_to_bring && (
        <div className="description">
          <h2>What to bring?</h2>
          <p className="text">
            <div
              dangerouslySetInnerHTML={{
                __html: experienceData?.what_to_bring,
              }}
            />
          </p>
        </div>
      )}
      {experienceData?.faq && (
        <div className="description">
          <h2>FAQS</h2>
          <div className="faqs-container">
            {faqs?.map((faq, index) => (
              <div
                className={`faq ${activeFaq === index && "active"}`}
                key={index}
                onClick={() => {
                  setActiveFaq((current) => (current === index ? -1 : index));
                }}
              >
                <div className="faq-header">
                  <h4 className="medium">{faq.title}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                  >
                    <path
                      d="M7.5425 16.19C7.6325 16.15 7.7125 16.1 7.7825 16.03L13.7825 10.03C14.0725 9.74 14.0725 9.26 13.7825 8.97C13.4925 8.68 13.0125 8.68 12.7225 8.97L8.0025 13.69L8.0025 1.5C8.0025 1.09 7.6625 0.75 7.2525 0.75C6.8425 0.75 6.5025 1.09 6.5025 1.5L6.5025 13.69L1.7825 8.97C1.4925 8.68 1.0125 8.68 0.722499 8.97C0.572499 9.12 0.502499 9.31 0.502499 9.5C0.502499 9.69 0.572499 9.88 0.722498 10.03L6.7225 16.03C6.7925 16.1 6.8725 16.15 6.9625 16.19C7.1525 16.27 7.3525 16.27 7.5425 16.19Z"
                      fill="#211D33"
                    />
                  </svg>
                </div>

                <p>{faq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetTabs;
