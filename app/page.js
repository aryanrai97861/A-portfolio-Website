"use client";
import CertificateSection from "@/app/components/CertificateSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div>
        <Skills />
        <Projects />
        <CertificateSection />
      </div>
    </>
  );
}
