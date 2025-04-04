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
                  BharatEHealth is a next-generation digital health platform empowering India's hospitals, clinics,
                  PHCs, and rural health centers with AI-driven Electronic Health Records (EHR) and smart Telemedicine —
                  built for rural scalability, urban precision, and NDHM compliance.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="BharatEHealth Platform Preview"
                  className="rounded-lg object-cover shadow-lg"
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
                  Our comprehensive EHR platform is designed specifically for India's diverse healthcare landscape.
                </p>
              </div>
            </div>

            <div className="grid gap-12 py-12">
              {/* AI-Integrated EHR System */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    <Brain className="h-4 w-4 mr-2" />
                    AI-Integrated EHR System
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
                        All-in-one patient record: History, diagnostics, prescriptions, insurance & follow-ups
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
                      <span>Interoperability with NDHM & Ayushman Bharat</span>
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
                      <span>Encrypted Health ID (Aadhaar + Ayushman + DOB) for secure identity mapping</span>
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
                      <span>AI predictions for early disease detection & treatment plans</span>
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
                      <span>Smart reminders for medications, vaccines, and lab tests</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="AI-Integrated EHR System"
                    className="rounded-lg object-cover shadow-lg"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              {/* Smart Telemedicine */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Smart Telemedicine for Every Corner of India"
                    className="rounded-lg object-cover shadow-lg"
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
                      <span>Low-bandwidth mobile app for rural use</span>
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
                      <span>Voice-enabled consultations for semi-literate users</span>
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
                      <span>Spoke-and-hub model connecting PHCs with district specialists</span>
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
                      <span>Store & forward support for dermatology, radiology & TB cases</span>
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
                      <span>AI-powered triage bot for first-level screening & doctor assignment</span>
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
                    <h3 className="mb-2 text-xl font-bold">Smart EHR</h3>
                    <p className="text-muted-foreground">
                      End-to-end patient records with diagnostics, prescriptions, and clinical notes
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
                      <Pill className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Pill & Vaccine Reminders</h3>
                    <p className="text-muted-foreground">
                      Auto-reminders to ensure adherence to treatment and public health schedules
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
                      <Flask className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Diagnostics Integration</h3>
                    <p className="text-muted-foreground">
                      Connects with X-ray, ECG, lab reports, and uploads to patient record
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
                      <UserCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Doctor & Staff Profiles</h3>
                    <p className="text-muted-foreground">
                      Links patient visits to doctors, nurses, and hospital staff for traceability
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
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Encrypted Patient ID</h3>
                    <p className="text-muted-foreground">Pseudonymized Health ID using Aadhaar + Ayushman + DOB</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Analytics */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">AI Analytics</h3>
                    <p className="text-muted-foreground">
                      Predictive health scores, at-risk patient alerts, and disease tracking
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offline-First & Mobile-Ready */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Offline-First & Mobile-Ready</h3>
                    <p className="text-muted-foreground">
                      Rural-ready with offline syncing and local language voice notes
                    </p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Designed for Bharat</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether it's a PHC in Ballari or a cardiac unit in Mysuru — BharatEHealth scales from rural clinics to
                  super-specialty hospitals.
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
                    <span>NDHM & Ayushman Ready</span>
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
                    <span>Multilingual + Voice-first UI</span>
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
                    <span>Modular and interoperable</span>
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
                    <span>Available as Web + Android App</span>
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
                    <span>Integrates with insurance, pharmacy, lab & government systems</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="BharatEHealth on multiple devices"
                  className="rounded-lg object-cover shadow-lg"
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
                  <path d="M16 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
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
                  <FileText className="h-12 w-12 text-primary" />
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Faster Ayushman & Insurance claim submissions</h3>
                <p className="text-center text-muted-foreground">
                  Automated insurance processing reduces claim settlement times and administrative overhead.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Healthcare reach expanded to Tier 2, Tier 3 & rural India
                </h3>
                <p className="text-center text-muted-foreground">
                  Breaking geographical barriers to bring quality healthcare to underserved communities.
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
                    <span>Email: contact@bharatehealth.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone: +91-XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Offices: Bengaluru | Mysuru | Delhi | Pune</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Website: www.bharatehealth.in</span>
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