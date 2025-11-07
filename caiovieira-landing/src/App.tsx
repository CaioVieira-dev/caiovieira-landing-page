import { Container } from "./components/ui/Container";
import { Background } from "./components/ui/Background";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
  return (
    <Container>
      <Background />
      <Hero />

      <ProjectsSection />

      <Footer />
    </Container>
  );
}

export default App;
