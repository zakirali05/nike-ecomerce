import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Popular from "./components/Popular";
import { toprateslaes, popularsales } from "./data/data";
function App() {
  return (
    <div className="App flex flex-col gap-12">
      <Navbar />
      <Hero />
      <Popular array={popularsales} isp={true} />
      <Popular array={toprateslaes} isp={false} />
    </div>
  );
}

export default App;
