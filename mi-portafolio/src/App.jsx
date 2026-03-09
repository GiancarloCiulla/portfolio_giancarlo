import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSummary from "./components/ExperienceSummary";
import TechStack from "./components/TechStack";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/App.scss";

const App = () => {
    return (
        <div className="app-shell">
            <Navbar />
            <main>
                <Hero />
                <About />
                <ExperienceSummary />
                <TechStack />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
