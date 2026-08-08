import Nav from "./components/Nav";
import Body from "./components/Body";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-slate-900">
      <Nav/>
      <Body/>
      <About/>
      <Services />
      <Projects/>
      <Contact/>
      <footer className="mt-20">
    <div className="h-px w-full mx-auto bg-white/10 mb-4"></div>
    <p className="text-center text-gray-400 text-sm pb-6">
          © {new Date().getFullYear()} Jeeva L · All Rights Reserved.
    </p>
</footer>
      
    </div>
  );
}

export default App;
