"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Shield, Clock, BarChart, Users, Mail, Phone, MapPin } from "lucide-react"

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
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Shield className="h-6 w-6" />
            <span>MediRecord</span>
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
          <div className="hidden md:block">
            <Button>Get Started</Button>
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
            <Button className="w-full">Get Started</Button>
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
                  Streamline Patient Care with Advanced EHR Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MediRecord provides secure, intuitive electronic health record software designed to improve clinical
                  workflows and patient outcomes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Request Demo
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="EHR Dashboard Preview"
                  className="rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Modern Healthcare
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive EHR platform is designed to meet the needs of healthcare providers of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure & Compliant</h3>
                <p className="text-center text-muted-foreground">
                  HIPAA-compliant security with end-to-end encryption and role-based access controls.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-center text-muted-foreground">
                  Streamlined workflows and intuitive interfaces reduce documentation time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Powerful reporting tools to track patient outcomes and practice performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Patient Portal</h3>
                <p className="text-center text-muted-foreground">
                  Engage patients with secure messaging, appointment scheduling, and record access.
                </p>
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <h3 className="text-xl font-bold">Care Coordination</h3>
                <p className="text-center text-muted-foreground">
                  Seamless referral management and care team collaboration tools.
                </p>
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
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                <h3 className="text-xl font-bold">Clinical Decision Support</h3>
                <p className="text-center text-muted-foreground">
                  Evidence-based alerts and recommendations at the point of care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About MediRecord</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2015, MediRecord has been at the forefront of healthcare technology innovation. Our mission
                  is to empower healthcare providers with tools that enhance patient care while reducing administrative
                  burden.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team consists of healthcare professionals, software engineers, and usability experts who work
                  together to create solutions that address real-world clinical challenges.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today, MediRecord serves over 500 healthcare organizations nationwide, from small practices to large
                  hospital systems, all benefiting from our intuitive and powerful EHR platform.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Medical team using MediRecord"
                  className="rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Healthcare Professionals</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about MediRecord.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Dr. Sarah Johnson"
                      className="rounded-full h-12 w-12 object-cover"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Family Medicine</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "MediRecord has transformed our practice. The intuitive interface and customizable templates have
                    cut our documentation time in half, allowing us to focus more on patient care."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="James Wilson"
                      className="rounded-full h-12 w-12 object-cover"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="font-semibold">James Wilson</h3>
                      <p className="text-sm text-muted-foreground">Healthcare IT Director</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The implementation process was smooth, and the support team has been exceptional. MediRecord's
                    analytics capabilities have provided valuable insights for our quality improvement initiatives."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about MediRecord? Our team is here to help. Reach out to us using the form or contact
                  information below.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@medirecord.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Health Tech Blvd, Suite 200, San Francisco, CA 94105</span>
                  </div>
                </div>
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
                <Shield className="h-6 w-6" />
                <span>MediRecord</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering healthcare providers with innovative EHR solutions since 2015.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Updates
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
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Careers
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
            <p className="text-xs text-muted-foreground">© 2023 MediRecord. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

