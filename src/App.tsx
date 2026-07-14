/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Menu } from "./components/Menu";
import { CupSizes } from "./components/CupSizes";
import { Equipment } from "./components/Equipment";
import { Portfolio } from "./components/Portfolio";
import { ContactForm } from "./components/ContactForm";
import { Contact } from "./components/Contact";

import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <CupSizes />
      <Equipment />
      <Portfolio />
      <ContactForm />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
