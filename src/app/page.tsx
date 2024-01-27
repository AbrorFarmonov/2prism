import AboutPage from "@/components/about";
import Entry from "@/components/entry";
import Footer from "@/components/footer";
import MoreInfo from "@/components/moreInfo";

export default function Home() {
  return (
    <>
      <Entry />
      <div className="custom-container">
        <MoreInfo />
        <AboutPage />
      </div>
      <Footer />
    </>
  );
}
