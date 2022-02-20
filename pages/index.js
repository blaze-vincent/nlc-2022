import Banner from "../components/banner";
import NavigationSection from "../components/navigationSection/navigationSection";

export default function Home() {
  return <div
    className="w-screen max-w-screen-xl m-auto pt-4"
  >
    <Banner />
    <div
      className="w-full max-w-screen-md m-auto"
    >
      <h1
        className="font-semibold text-lg text-white"
      >Categories</h1>
    </div>
    <NavigationSection />
  </div>
}
