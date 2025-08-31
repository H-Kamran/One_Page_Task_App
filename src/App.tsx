import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="app min-h-screen w-full h-full">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
      </div>
    </>
  );
}

export default App;
