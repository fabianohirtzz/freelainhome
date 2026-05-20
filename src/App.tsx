/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import Home from "@/src/pages/Home";
import Services from "@/src/pages/Services";
import Portfolio from "@/src/pages/Portfolio";
import Process from "@/src/pages/Process";
import About from "@/src/pages/About";
import Contact from "@/src/pages/Contact";
import BioLink from "@/src/pages/BioLink";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const isLinkPage = pathname === "/link";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-brand-cyan/30">
      {!isLinkPage && <Navbar />}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/processo" element={<Process />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/link" element={<BioLink />} />
        </Routes>
      </main>
      {!isLinkPage && <Footer />}
      {!isLinkPage && <WhatsAppButton />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
