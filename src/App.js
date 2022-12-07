import Hero from "./components/Hero";
export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
} from "./data/data";
function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
