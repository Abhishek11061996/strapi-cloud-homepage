import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import AboutBanner from "../components/AboutBanner";
import PartnerWithUs from "../components/PartnerWithUs";
import FocusedIndustries from "../components/FocusedIndustries";
import Expertise from "../components/Expertise";
import SatisfiedClient from "../components/SatisfiedClient";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.about-banner":
      return <AboutBanner key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.partner-with-us":
      return <PartnerWithUs key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    // case "sections.pricing":
    //   return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    // case "sections.focused-industries":
    //   return <FocusedIndustries key={index} data={section} />;
    case "sections.expertise":
      return <Expertise key={index} data={section} />;
    case "sections.satisfied":
      return <SatisfiedClient key={index} data={section} />;
    default:
      return null;
  }
}
