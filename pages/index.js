import { TestGesap } from "@/components/common/TestGesap";
import { GsapPopup } from "@/components/common/videoPopup/GsapPopup";
import { Template1 } from "@/components/home/Template1";
import { Template2 } from "@/components/home/Template2";
import { Template3 } from "@/components/home/Template3";
import Widget from "@/components/widget/Widget";
import LabelContextProvider from "@/context/HandleLabelForm";
import MediaGalleryPopupProvider from "@/contexts/MediaGalleryPopupContex";
import SmootherRefProvider from "@/contexts/SmootherRefContext";
import ActiveMenuProvider from "@/contexts/activeMenu";
import ActiveWidgetProvider, { HandleID } from "@/contexts/activeWidget";
import BookingExtrasProvider from "@/contexts/bookingExtras";
import HandleWidgetId, { ExperienceId } from "@/contexts/handleWadgetId";
import React, { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Index = () => {
  const queryClient = new QueryClient();
  // let { experienceID } = useContext(ExperienceId);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HandleWidgetId>
          <BookingExtrasProvider>
            <LabelContextProvider>
              <ActiveWidgetProvider>
                <ActiveMenuProvider>
                  <SmootherRefProvider>
                    <MediaGalleryPopupProvider>
                      {/* <Template1 /> */}
                      {/* <Template2 /> */}
                      <Template3 />
                      {/* <TestGesap /> */}
                    </MediaGalleryPopupProvider>
                  </SmootherRefProvider>
                </ActiveMenuProvider>
              </ActiveWidgetProvider>
            </LabelContextProvider>
          </BookingExtrasProvider>
        </HandleWidgetId>
      </QueryClientProvider>
    </>
  );
};

export default Index;
