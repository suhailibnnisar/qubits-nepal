import React from "react";

import Header from "sections/Header/Header";
import Services from "sections/Services/Services";
import WhyUs from "sections/WhyUs/WhyUs";
import Portfolio from "sections/Portfolio/Portfolio";
import Testimonials from "sections/Testimonials/Testimonials";
import ContactUs from "sections/ContactUs/ContactUs";
import Footer from "sections/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
