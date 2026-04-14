import MainLayout from './layout/MainLayout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorksGrid from './components/WorksGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <WorksGrid />
      <About />
      <Contact />
    </MainLayout>
  );
}

export default App;
