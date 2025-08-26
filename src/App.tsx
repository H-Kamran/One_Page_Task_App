import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="app min-h-screen w-full h-full">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
