import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — let's build something great together.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactSection />
    </div>
  );
}
