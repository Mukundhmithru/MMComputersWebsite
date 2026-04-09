import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "price", label: "Price" },
  { id: "reviews", label: "Review" },
  { id: "contact", label: "Contact Us" },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [servicesPerView, setServicesPerView] = useState(3);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light");

  const observerIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = observerIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [observerIds]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateServicesPerView = () => {
      const totalServices = 6;
      if (window.innerWidth < 768) {
        setServicesPerView(1);
      } else if (window.innerWidth < 1100) {
        setServicesPerView(2);
      } else {
        setServicesPerView(Math.min(3, totalServices));
      }
    };

    updateServicesPerView();
    window.addEventListener("resize", updateServicesPerView);
    return () => window.removeEventListener("resize", updateServicesPerView);
  }, []);

  useEffect(() => {
    const totalServices = 6;
    const maxIndex = Math.max(0, totalServices - servicesPerView);
    setServiceIndex((current) => Math.min(current, maxIndex));
  }, [servicesPerView]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setServiceIndex((current) => {
        const totalServices = 6;
        const maxIndex = Math.max(0, totalServices - servicesPerView);
        return current >= maxIndex ? 0 : current + 1;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [servicesPerView]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const showPrevService = () => {
    setServiceIndex((current) => {
      const totalServices = 6;
      const maxIndex = Math.max(0, totalServices - servicesPerView);
      return current === 0 ? maxIndex : current - 1;
    });
  };

  const showNextService = () => {
    setServiceIndex((current) => {
      const totalServices = 6;
      const maxIndex = Math.max(0, totalServices - servicesPerView);
      return current >= maxIndex ? 0 : current + 1;
    });
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="site-shell">
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        navItems={navItems}
        scrollToSection={scrollToSection}
        setMenuOpen={setMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection
          serviceIndex={serviceIndex}
          servicesPerView={servicesPerView}
          setServiceIndex={setServiceIndex}
          showNextService={showNextService}
          showPrevService={showPrevService}
        />
        <PricingSection scrollToSection={scrollToSection} />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer navItems={navItems} scrollToSection={scrollToSection} />

      <a
        className="floating-whatsapp"
        href="https://wa.me/918807329654"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
      >
        <i className="bi bi-whatsapp" />
      </a>

      <button
        className={`back-to-top-react ${showTop ? "show" : ""}`}
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </div>
  );
};

export default App;
