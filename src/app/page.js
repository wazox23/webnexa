import StartPageHero from "./modules/startPageHero/startPageHero";
import WhatWeDo from "./modules/whatWeDo/whatWeDo";
import WhyItsImportant from "./modules/whyItsImportant/whyItsImportant";
import TheRightFit from "./modules/theRightFit/theRightFit";
import OurValues from "./modules/ourValues/ourValues";
import Footer from "./modules/footer/footer";
import FAQAccordion from "./modules/faqAccordion/faqAccordion";
import TeaserSection from "./modules/teaserSection/teaserSection";
import ContactForm from "./modules/contactForm/contactForm";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <StartPageHero />
            <WhatWeDo />
            <WhyItsImportant />
            <TheRightFit />
            <OurValues />
            <TeaserSection />
            <FAQAccordion />
            <ContactForm />
            <Footer />
        </main>
    );
}
