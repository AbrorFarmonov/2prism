import Entry from "@/components/entry";
import MoreInfo from "@/components/moreInfo";

export default function Home() {
  return (
    <>
      <Entry />
      <div className="custom-container">
        <MoreInfo />
      </div>
    </>
  );
}
