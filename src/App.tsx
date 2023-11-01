import CallToAction from "./components/CallToAction";
import Content from "./components/Content";
import Feature from "./components/Feature";
import HeroSection from "./components/Hero-Section";
import Team from "./components/Team";
import SwiperComponent from "./components/Swiper";

function App() {
  return (
    <main>
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="call-to-action">
        <SwiperComponent />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="call-to-action">
        <CallToAction />
      </div>
    </main>
  );
}

export default App;
