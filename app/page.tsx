"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronRight,
  Shield,
  Brain,
  Phone,
  Clock,
  FileText,
  Pill,
  FlaskRoundIcon as Flask,
  UserCircle,
  Lock,
  BarChart3,
  Smartphone,
  Globe,
  Building,
  Stethoscope,
  MapPin,
  Mail,
  AlarmClock,
  Network,
  FlaskConical,
  ShieldCheck,
  Share2,
  Inbox,
  Mic,
  FileCheck,
  Repeat,
  Handshake
} from "lucide-react"

export default function Home() {
  // Add smooth scrolling behavior for anchor links
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Only apply to anchor links that begin with #
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")

    if (targetId) {
      e.preventDefault()
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Update URL without page reload
        window.history.pushState({}, "", `#${targetId}`)
      }
    }
  }
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 pt-2 pb-2 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <img
              src="/logo.png"
              alt="BHARAT E-HEALTH"
              width={60}
              height={0}
            />
            <span>BHARAT E-HEALTH</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={handleScrollToSection}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={handleScrollToSection}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={handleScrollToSection}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={handleScrollToSection}
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-muted-foreground"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="#home"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={(e) => {
                document.getElementById("mobile-menu")?.classList.add("hidden")
                handleScrollToSection(e)
              }}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={(e) => {
                document.getElementById("mobile-menu")?.classList.add("hidden")
                handleScrollToSection(e)
              }}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={(e) => {
                document.getElementById("mobile-menu")?.classList.add("hidden")
                handleScrollToSection(e)
              }}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={(e) => {
                document.getElementById("mobile-menu")?.classList.add("hidden")
                handleScrollToSection(e)
              }}
            >
              Contact Us
            </Link>            
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  AI-Powered EHR + Telemedicine for India's Healthcare Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BharatEHealth is a next-generation digital health platform empowering India's hospitals, clinics, PHCs, and rural health centers with AI-driven Electronic Health Records (EHR) and smart Telemedicine — built for  scalability,  precision, and NDHM compliance.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/AI powered.png"
                  alt="AI-Powered EHR + Telemedicine for India's Healthcare Future"
                  className="rounded-lg object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Makes BharatEHealth Unique Section */}
        <section id="features" className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Makes BharatEHealth Unique?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive EHR and telemedicine platform is designed specifically for India's diverse healthcare landscape.
                </p>
              </div>
            </div>

            <div className="grid gap-12 py-12">
              {/* AI-Integrated EHR System */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    <Brain className="h-4 w-4 mr-2" />
                    AI-Integrated EHR System for Smarter Healthcare
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>All-in-one digital patient record</b> covering history, diagnostics, prescriptions, insurance, and follow-ups.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Seamless interoperability with NDHM and Ayushman Bharat</b> for cross-platform health data exchange.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Encrypted Health ID using Aadhaar, Ayushman Card</b> for secure, pseudonymized patient identity.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>AI-powered early disease detection and predictive treatment planning</b> to improve clinical outcomes.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Automated reminders for medications, vaccinations, lab tests, and follow-up appointments</b> to ensure care continuity.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/AI Integrated EHR.png"
                    alt="AI-Integrated EHR System"
                    className="rounded-lg object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              {/* Smart Telemedicine */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex justify-center">
                  <img
                    src="/Telemedicine.png"
                    alt="Smart Telemedicine for Every Corner of India"
                    className="rounded-lg object-cover"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Smart Telemedicine for Every Corner of India
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Low-bandwidth mobile app</b> optimized for rural and remote healthcare access.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Voice-enabled teleconsultations</b> designed for semi-literate and multilingual users.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Spoke-and-hub telemedicine network</b> connecting PHCs to district-level specialists.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>Store-and-forward telehealth support</b> for dermatology, radiology, and TB case management.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>
                        <b>AI-powered triage assistant</b> for automated symptom screening and smart doctor routing.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Our comprehensive platform combines cutting-edge technology with healthcare expertise
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart EHR */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Unified Digital Health Records</h3>
                    <p className="text-muted-foreground">
                      Maintain complete patient profiles including history, diagnostics, prescriptions, insurance details, and follow-ups — all accessible anytime, anywhere.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pill & Vaccine Reminders */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Secure Health ID & Privacy Protection</h3>
                    <p className="text-muted-foreground">
                      Enable secure, pseudonymized patient identification mapped to national health programs like Ayushman Bharat and ABHA — with full data privacy compliance.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostics Integration */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FlaskConical className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Diagnostics Integration</h3>
                    <p className="text-muted-foreground">
                      Connects with X-ray, ECG, lab reports, and uploads to patient record.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor & Staff Profiles */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Seamless Interoperability</h3>
                    <p className="text-muted-foreground">
                      Built to integrate effortlessly with national healthcare frameworks like NDHM, labs, pharmacies, and insurance systems for streamlined workflows.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encrypted Patient ID */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <AlarmClock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Smart Health Reminders</h3>
                    <p className="text-muted-foreground">Automated notifications for medications, vaccinations, lab tests, and follow-ups to improve treatment adherence and reduce dropouts.</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scalable Telemedicine Platform */}
        <section className="pb-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Scalable Telemedicine Platform</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart EHR */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Mobile responsive & Rural-Ready Access</h3>
                    <p className="text-muted-foreground">
                      Low-bandwidth, mobile-first design optimized.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pill & Vaccine Reminders */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Voice-Enabled and Multilingual Support</h3>
                    <p className="text-muted-foreground">
                      Designed for inclusivity with voice interface and local language support, enhancing usability across demographics.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostics Integration */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Share2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Connected Network Model</h3>
                    <p className="text-muted-foreground">
                      Facilitates referral-based care between rural centers (PHCs/CHCs) and urban specialists using a scalable hub-and-spoke system.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor & Staff Profiles */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Inbox className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Store-and-Forward Capability</h3>
                    <p className="text-muted-foreground">
                      Supports asynchronous consults for image- or report-based specialties like dermatology, radiology, ophthalmology, and TB.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encrypted Patient ID */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">AI-Assisted Patient Triage</h3>
                    <p className="text-muted-foreground">Intelligent first-level screening that helps prioritize care delivery, reduce wait times, and optimize resource allocation.</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Bharat */}
        <section id="about" className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Built for Bharat: Secure. Scalable. Inclusive.</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether it's a rural health center or a multi-specialty hospital — BharatEHealth scales seamlessly across all levels of healthcare infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>NDHM & Ayushman Bharat compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Role-based access for hospital Staff, clinics  & diagnostic labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Modular, cloud-native design for government and private healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Privacy-first approach — no Aadhaar exposure, encrypted data architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Works both online and offline (sync-enabled for low connectivity)</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/Build for Bharat.png"
                  alt="BharatEHealth on multiple devices"
                  className="rounded-lg object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Use BharatEHealth */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who Can Use BharatEHealth?</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Building className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Government Hospitals & Medical Colleges</h3>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Stethoscope className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Private Clinics & Nursing Homes</h3>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <h3 className="text-xl font-bold text-center">PHCs/CHCs in Rural India</h3>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Flask className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Diagnostic Labs & e-Pharmacies</h3>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Handshake className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">CSR/NGO Health Initiatives</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes That Matter */}
        <section className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Outcomes That Matter</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">30% faster OPD processing</h3>
                <p className="text-center text-muted-foreground">
                  Streamlined workflows reduce wait times and improve patient satisfaction.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Repeat className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">100% continuity of care across facilities</h3>
                <p className="text-center text-muted-foreground">
                  Complete patient history available at every touchpoint in the healthcare journey.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Brain className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">25% improvement in early diagnosis using AI</h3>
                <p className="text-center text-muted-foreground">
                  AI-powered insights help detect health issues before they become critical.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <FileCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Faster Ayushman & Insurance claim submissions</h3>
                <p className="text-center text-muted-foreground">
                  Automated insurance processing reduces claim settlement times and administrative overhead.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Expanded Healthcare Reach to Urban & Rural India
                </h3>
                <p className="text-center text-muted-foreground">
                  Breaking geographical barriers to bring quality healthcare to underserved communities.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Actionable Analytics for Administrators
                </h3>
                <p className="text-center text-muted-foreground">
                  Track OPD/IPD metrics, medication adherence, and patient outcomes with real-time dashboards — no technical expertise needed.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Compliance with NDHM, ABHA, and Aadhaar Privacy Standards
                </h3>
                <p className="text-center text-muted-foreground">
                  Built to support India's national health stack and comply with government regulations for secure, pseudonymized patient data handling.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Mic className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Inclusive by Design: Voice + Vernacular Interface
                </h3>
                <p className="text-center text-muted-foreground">
                  Supports multiple Indian languages and voice-guided interaction, making digital health accessible to semi-literate populations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about BharatEHealth? Our team is here to help. Reach out to us using the form or
                  contact information below.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email: info@bharatehealth.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Offices: Bengaluru | Ahmedabad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Website: www.bharatehealth.com</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  Join us in building India's most intelligent and inclusive healthcare platform.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Organization
                    </label>
                    <Input id="organization" placeholder="Your Healthcare Organization" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <img
                  src="/logo.png"
                  alt="BHARAT E-HEALTH"
                  width={60}
                  height={0}
                />
                <span>BHARAT E-HEALTH</span>
              </div>
              <p className="text-sm text-muted-foreground">
                BharatEHealth is a next-generation digital health platform empowering India’s hospitals, clinics, PHCs, and rural health centers with AI-driven Electronic Health Records (EHR) and smart Telemedicine — built for rural scalability, urban precision, and NDHM compliance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={handleScrollToSection}
                    >
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#about"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={handleScrollToSection}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={handleScrollToSection}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Stay Updated</h3>
              <form className="flex space-x-2">
                <Input placeholder="Enter your email" type="email" className="max-w-[240px]" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© 2025 BharatEHealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}