import { Navbar } from "@/components/common/navbar/Navbar";
import "../styles/app.scss";
import { Footer } from "@/components/common/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import IsMobileProvider from "@/contexts/isMobileContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <IsMobileProvider>
          <Component {...pageProps} />
        </IsMobileProvider>
      </main>
      {/* <Footer /> */}
    </>
  );
}
