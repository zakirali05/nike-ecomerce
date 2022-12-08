import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Popular from "./components/Popular";
import High from "./components/High";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import {
  toprateslaes,
  popularsales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data";
function App() {
  return (
    <div className="App flex flex-col gap-12">
      <Navbar />
      <Hero />
      <Popular array={popularsales} isp={true} />
      <High d={highlight} />
      <Popular array={toprateslaes} isp={false} />
      <High d={sneaker} />
      <Stories story={story} />
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
