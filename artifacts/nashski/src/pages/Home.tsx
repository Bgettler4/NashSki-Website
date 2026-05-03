import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Anchor,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  ChevronDown,
  Play,
  Fuel,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";
import gallery5 from "@/assets/images/gallery-5.png";
import nashSkiLogo from "@assets/Screen_Shot_2026-04-23_at_9.28.12_PM_1776997780988.png";
import nashSkiLogoWhite from "@/assets/nashski-wordmark-white.png";
import nashSkiBadge from "@/assets/nashski-badge-transparent.png";
import lakeBackground from "@assets/download_1776997945074.jpg";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* 1. Sticky Top NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src={isScrolled ? nashSkiLogo : nashSkiLogoWhite}
              alt="NashSki Rentals — Old Hickory Lake, Nashville, TN"
              className={`h-11 md:h-12 w-auto transition-all duration-300 ${
                isScrolled ? "" : "drop-shadow-md"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              "About",
              "Pricing",
              "Location",
              "Experience",
              "Gallery",
              "Reviews",
              "FAQ",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-muted-foreground" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
            <Button
              asChild
              className={
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }
            >
              <a href="#pricing">Book Now</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 -mr-2 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
            {[
              "About",
              "Pricing",
              "Location",
              "Experience",
              "Gallery",
              "Reviews",
              "FAQ",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-primary py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <Button asChild className="w-full mt-2" size="lg">
              <a href="#pricing" onClick={closeMobileMenu}>
                Book Now
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={lakeBackground}
            alt="Aerial view of Old Hickory Lake near Nashville, TN"
            className="w-full h-full object-cover object-center"
          />
          {/* Dim overlays so the badge & text pop */}
          <div className="absolute inset-0 bg-primary/55"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.img
              src={nashSkiLogoWhite}
              alt="NashSki Rentals · Old Hickory Lake · Nashville, TN"
              className="w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] h-auto [filter:drop-shadow(0_6px_18px_rgba(0,0,0,0.45))] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white text-sm font-medium mb-8">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Blue Turtle Bay Marina · Old Hickory Lake · Nashville, TN</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg">
              Open Water. <span className="text-accent">Open Throttle.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow">
              Jet ski rentals on Old Hickory Lake — minutes from Nashville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-none h-14 px-8 text-base">
                <a href="#pricing">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 h-14 px-8 text-base">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT / OVERVIEW */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
              Premium Jet Ski Rentals<br />in Middle Tennessee
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
              <p>
                Operating out of one of the top-rated marinas in the Greater Nashville area, NashSki is quickly becoming a go-to destination for jet ski rentals on Old Hickory Lake. Skip the crowded downtown waterways and long idle zones—launch directly from Blue Turtle Bay Marina and get straight to open water, where the real fun begins.
              </p>
              <p>
                Our location on Old Hickory Lake offers the perfect balance of convenience and wide-open space, giving you more ride time and less waiting. Whether you're a Nashville local or visiting for the weekend, NashSki delivers a premium jet ski experience in Middle Tennessee.
              </p>
              <p>
                We pride ourselves on providing a smooth, professional experience from start to finish—featuring easy online booking, clear instructions, and top-tier customer service.
              </p>
              <p>
                Book your jet ski online or call for walk-up availability. Located inside the marina, you can make a full day of it—enjoy lunch at Sam's Restaurant before or after your time on the water.
              </p>
              <p className="font-medium text-primary text-xl mt-8">
                Discover why more riders are choosing NashSki for their time on Old Hickory Lake.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRICING & BOOKING */}
      <section id="pricing" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                Pricing & Booking
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At NashSki, we offer competitive, transparent pricing for a premium jet ski experience on Old Hickory Lake—just minutes from Nashville.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Fuel className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Fuel Policy</h3>
                <p className="text-muted-foreground mb-6">
                  Fuel is the responsibility of the rider. At check-in, guests will select one of:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-primary font-semibold">Self-Refuel</strong> — return the jet ski with the same fuel level at the end of your ride.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-primary font-semibold">Convenience Refuel</strong> — allow our team to handle refueling for you at a set fuel rate based on your booked ride time.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Fuel usage is estimated and aligned with your rental duration to keep the process simple, transparent, and efficient.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">Walk-Up Rentals</h3>
                  <p className="text-muted-foreground">
                    Walk-up rentals are welcome based on availability. Guests who visit us on-site and confirm availability may book directly at the marina, with no additional online booking fees.
                  </p>
                </div>
                <div className="bg-primary text-white p-8 rounded-2xl shadow-md flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold mb-4">Ready to Ride?</h3>
                  <p className="text-white/80 mb-8">
                    Our rates vary based on ride duration, availability, and peak times. For real-time pricing and scheduling, use our live booking system to view available time slots and secure your ride instantly.
                  </p>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white border-none h-14 text-lg">
                    Check Availability & Book Now
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.p variants={fadeInUp} className="text-center text-muted-foreground max-w-3xl mx-auto">
              We're proud to operate from the west side of Old Hickory Lake — the side closest to Nashville — offering one of the most convenient jet ski rental locations in the Greater Nashville area, without the congestion and long idle zones.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 5. LOCATION (Google Maps) */}
      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-12 text-center tracking-tight">
              Find Us at Blue Turtle Bay Marina
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-border h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps?q=Blue+Turtle+Bay+Marina+Old+Hickory+Lake+TN&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-125"
                ></iframe>
              </div>
              
              <div className="flex flex-col gap-6">
                <Card className="bg-secondary border-none shadow-sm h-full">
                  <CardContent className="p-8 flex flex-col justify-center h-full">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-4">Pick-Up Location</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      We operate directly out of Blue Turtle Bay Marina on the west side of Old Hickory Lake. Just head to the docks and look for the NashSki signs.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-border mt-auto">
                      <p className="text-sm font-medium text-primary">Pro Tip</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Make a day of it! Sam's Restaurant is located right on-site at the marina—perfect for lunch before or after your ride.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. THE EXPERIENCE */}
      <section id="experience" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              The Experience
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                There's nothing like the rush of gliding across Old Hickory Lake with the Nashville skyline just a short drive away. Within minutes of taking off, you'll feel the freedom, speed, and excitement that make jet skiing one of the best outdoor activities in Tennessee.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 my-8">
                <p className="font-medium text-white mb-4">Whether you're looking for:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    A high-speed adrenaline ride
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    A laid-back cruise with friends
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    Or a fun, family-friendly lake day
                  </li>
                </ul>
                <p className="font-display font-bold text-2xl text-accent mt-6">NashSki has you covered.</p>
              </div>
              
              <p>
                Our jet skis are powerful Yamahas, easy to operate, and perfect for riders of all experience levels. Spend less time navigating no-wake zones and more time enjoying wide-open water, scenic lake views, and unforgettable moments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-bold text-primary mb-12 text-center tracking-tight">
              On the Water
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group">
                <img src={gallery1} alt="Jet skiing golden hour" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden group">
                <img src={gallery2} alt="Friends on waverunner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden group bg-secondary flex items-center justify-center relative cursor-pointer hover:bg-secondary/80 transition-colors">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="text-center z-10 p-6">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-primary group-hover:text-accent transition-colors">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                  <p className="font-medium text-primary">Video coming soon</p>
                  <p className="text-sm text-muted-foreground">shot by Jackson</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden group">
                <img src={gallery3} alt="Marina dock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div variants={fadeInUp} className="md:col-span-2 rounded-2xl overflow-hidden group">
                <img src={gallery4} alt="Lake views" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div variants={fadeInUp} className="md:col-span-3 rounded-2xl overflow-hidden group h-[300px]">
                <img src={gallery5} alt="Action spray" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. REVIEWS */}
      <section id="reviews" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                Rider Reviews
              </h2>
              <p className="text-sm text-muted-foreground">Real Google & Facebook reviews populate here once connected.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Sarah M.", text: "Best jet ski rental in Nashville! The location is perfect—we were out on open water within 5 minutes of leaving the dock. Skis were brand new and fast." },
                { name: "David T.", text: "Super easy booking process and the staff at the marina were incredibly helpful. Way better than dealing with the downtown traffic." },
                { name: "Jessica R.", text: "Had an amazing Sunday on the lake with friends. NashSki made everything seamless. Will definitely be renting from them again next month!" },
                { name: "Mike L.", text: "Top notch experience. The Yamahas they rent are powerful and well maintained. Loved grabbing a bite at Sam's right after. 5 stars." }
              ].map((review, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-1">"{review.text}"</p>
                  <p className="font-display font-bold text-primary">{review.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. IMPORTANT THINGS TO KNOW */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 tracking-tight flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-accent" />
              Important Things to Know
            </h2>
            
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <ul className="space-y-4 text-muted-foreground mb-10">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>You must be at least 18 years old to rent a jet ski.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>The primary driver must be 18+ with a valid government-issued photo ID and a working cell phone for check-in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>If the driver was born on or after January 1, 1989, a Tennessee Boater Education Card is required to operate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>If you do not already have your certification, full step-by-step instructions are available below in the Boater Certification Checklist.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>All drivers must present a valid government-issued photo ID at check-in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>All cancellations must be made at least 24 hours prior to your scheduled reservation time to receive a refund. Cancellations within 24 hours are non-refundable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <span>To speed up your check-in process, please complete all required digital waivers prior to arrival (provided at booking).</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 flex-1 h-14">
                  Sign Waiver (SmartWaiver)
                </Button>
                <Button size="lg" variant="outline" className="flex-1 h-14 bg-white" asChild>
                  <a href="#certification">Get Tennessee Certified</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. BOATER CERTIFICATION CHECKLIST */}
      <section id="certification" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              Boater Certification Checklist
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              If you were born after January 1, 1989, Tennessee law requires you to complete a boating safety certification before operating a jet ski. Follow the steps below to get certified quickly and be ready for your NashSki reservation.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="step-1" className="border-border">
                <AccordionTrigger className="text-left text-lg font-display text-primary hover:no-underline hover:text-accent">
                  Step 1 — Confirm You Need Certification
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  You must complete certification if you were born on or after January 1, 1989 AND you plan to operate (drive) a jet ski in Tennessee.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="step-2" className="border-border">
                <AccordionTrigger className="text-left text-lg font-display text-primary hover:no-underline hover:text-accent">
                  Step 2 — Complete an Approved Tennessee Boating Safety Course
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base space-y-4">
                  <p>Take an official Tennessee-approved boating safety course online at <a href="https://www.tn.gov/twra/boating/boating-education.html" target="_blank" rel="noreferrer" className="text-accent hover:underline">tn.gov/twra</a>.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fully online and self-paced.</li>
                    <li>Can be completed in 2–4 hours.</li>
                    <li>Accessible from phone, tablet, or computer.</li>
                    <li>Must be completed through a TWRA-approved provider.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-3" className="border-border">
                <AccordionTrigger className="text-left text-lg font-display text-primary hover:no-underline hover:text-accent">
                  Step 3 — Pass the Final Exam
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Complete the online certification exam. Must pass to receive your Boater Education Card. Retakes are typically available if needed (provider dependent).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-4" className="border-border">
                <AccordionTrigger className="text-left text-lg font-display text-primary hover:no-underline hover:text-accent">
                  Step 4 — Receive Your Boater Education Card
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Issued digitally or by mail depending on provider. Certification is valid for life. Must be presented at check-in (digital or physical accepted).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-5" className="border-border">
                <AccordionTrigger className="text-left text-lg font-display text-primary hover:no-underline hover:text-accent">
                  Step 5 — Bring Proof to Your Reservation
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  At check-in with NashSki, you must present your Boater Education Card AND a valid government-issued photo ID.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-12 text-center tracking-tight">
              Frequently Asked Questions
            </h2>

            <Card className="bg-white border-border shadow-sm">
              <CardContent className="p-2 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { q: "How old do I need to be to rent a jet ski?", a: "You must be at least 18 years old to rent. The primary driver must be 18+ with a valid government-issued photo ID." },
                    { q: "Do I need a boating license?", a: "If you were born on or after January 1, 1989, Tennessee law requires you to have a Boater Education Card to operate a jet ski. See our certification checklist above for details." },
                    { q: "How does the fuel policy work?", a: "Fuel is not included in the rental price. You can choose to 'Self-Refuel' and return it full, or select 'Convenience Refuel' and we'll handle it for a set rate based on your ride time." },
                    { q: "What should I bring?", a: "Bring your photo ID, Boater Education Card (if applicable), phone, sunscreen, towel, and appropriate swimwear. We provide life jackets for all riders." },
                    { q: "What is your cancellation policy?", a: "Cancellations made at least 24 hours prior to your scheduled reservation time will receive a full refund. Cancellations within 24 hours are non-refundable." },
                    { q: "Do you take walk-up rentals?", a: "Yes! Walk-up rentals are welcome based on availability at the marina with no additional online booking fees. However, booking online guarantees your time slot." },
                    { q: "What happens if it rains?", a: "Safety is our priority. If there is severe weather or lightning, we will delay, reschedule, or cancel your reservation with a full refund." },
                    { q: "How many people can fit on one jet ski?", a: "Our Yamaha waverunners can safely accommodate up to 2 adult riders, depending on total weight. Please ask our staff if you have specific capacity questions." }
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border px-4">
                      <AccordionTrigger className="text-left text-base font-medium text-primary hover:no-underline hover:text-accent">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 12. LOCATION #2 (SVG Map) & 13. CONTACT */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Have questions or need help booking your group? Reach out to our team directly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <a href="mailto:bookings@nashski.com" className="flex items-center gap-4 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors border border-border group">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-semibold text-primary">bookings@nashski.com</p>
                  </div>
                </a>
                <a href="tel:615-572-8199" className="flex items-center gap-4 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors border border-border group">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="font-semibold text-primary">615-572-8199</p>
                  </div>
                </a>
                <a href="https://instagram.com/nash.skii" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors border border-border group">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-primary">@nash.skii</p>
                  </div>
                </a>
                <a href="https://facebook.com/NashSki" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors border border-border group">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Facebook className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Facebook</p>
                    <p className="font-semibold text-primary">NashSki</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              {/* NashSki Badge */}
              <div className="relative w-full flex items-center justify-center py-8">
                <div className="absolute inset-12 bg-gradient-to-br from-accent/20 via-accent/5 to-primary/10 rounded-full blur-3xl" />
                <motion.img
                  src={nashSkiBadge}
                  alt="NashSki Rentals · Nashville, TN · Old Hickory Lake"
                  className="relative w-full max-w-[280px] md:max-w-xs h-auto drop-shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-primary pt-20 pb-10 text-white border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center mb-6">
                <img
                  src={nashSkiLogoWhite}
                  alt="NashSki Rentals"
                  className="h-20 md:h-24 w-auto"
                />
              </Link>
              <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
                Premium jet ski rentals on Old Hickory Lake. Launch directly from Blue Turtle Bay Marina, minutes from Nashville.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/nash.skii" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/NashSki" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {["About", "Pricing", "Location", "Experience"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-4">
                {["FAQ", "Certification", "Reviews"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">Sign Waiver</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>© 2026 NashSki LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
