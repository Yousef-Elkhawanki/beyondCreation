import { Template1 } from "@/components/home/Template1";
import { Template2 } from "@/components/home/Template2";
import { Template3 } from "@/components/home/Template3";
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
