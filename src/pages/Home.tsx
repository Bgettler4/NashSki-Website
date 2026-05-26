import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Shield, CheckCircle, Star, Calendar, Users,
  Droplets, ArrowRight, Anchor, Navigation, Sun, Phone,
  Mail, Instagram, Facebook, ChevronLeft, ChevronRight,
  Camera, Play,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import logo from "@/assets/nashski/nashski-wordmark-white.png";
import circleLogo from "@/assets/circle-logo-transparent.png";
import fleetPic1 from "@/assets/fleet-1.png";
import fleetPic2 from "@/assets/fleet-2.png";
import fleetPic3 from "@/assets/fleet-3.png";
import fleetPic4 from "@/assets/fleet-4.png";
import fleetPic5 from "@/assets/fleet-5.png";
import premiumPic from "@/assets/premium-yamaha-vx.png";
import oldHickoryMap from "@/assets/old-hickory-map.png";
import marinaPic from "@/assets/blue-turtle-bay-marina.webp";
import jetskiRidePic from "@/assets/generated_images/jet-ski-action.png";
import foodPic from "@/assets/sams-grill.jpg";
import groupPic from "@/assets/generated_images/friends-on-lake.png";

const BOOK_NOW = "https://trytn.com/en/NashSkiLLC";
const TRYTN_AVAILABILITY = "https://trytn.com/en/NashSkiLLC";
const PREMIUM_LINK = "https://trytn.com/en/NashSkiLLC/details/a70857ba-e957-449c-9c55-85fa819a0db1?typeOfProduct=Activity";
const SAMS_GRILL_LINK = "https://www.samssportsgrill.com/location/sams-sports-grill-blue-turtle-bay/";
const WAIVER_LINK = "https://waiver.smartwaiver.com/w/mbmmkdrqv3jo1f3rejir5x/web/";
const DIRECTIONS_LINK = "https://google.com/maps/place/NashSki+Jet+Ski+Rentals/data=!4m2!3m1!1s0x0:0xa1b06d541270c539?sa=X&ved=1t:2428&ictx=111";
const INSTAGRAM_LINK = "https://www.instagram.com/nash.skii/";
const FACEBOOK_LINK = "https://www.facebook.com/people/NashSki/61567724215545/?sk=about";
const GOOGLE_REVIEWS_LINK = "https://g.page/r/CTnFcBJUbbChEAE/review";

const BASE_FLEET = [
  { label: "Yamaha EX Deluxe", img: fleetPic1 },
  { label: "Yamaha EX Sport", img: fleetPic2 },
  { label: "Sea-Doo Spark", img: fleetPic3 },
  { label: "Sea-Doo Spark", img: fleetPic4 },
  { label: "Yamaha EX Deluxe", img: fleetPic5 },
];

function FleetCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % BASE_FLEET.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);
  const prev = () => setCurrent((c) => (c - 1 + BASE_FLEET.length) % BASE_FLEET.length);
  const next = () => setCurrent((c) => (c + 1) % BASE_FLEET.length);
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl bg-gradient-to-br from-[#0B192D] to-[#0e2440]">
      {BASE_FLEET.map((ski, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={ski.img}
            alt={ski.label}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192D]/60 via-transparent to-transparent" />
          <span className="absolute bottom-10 left-4 text-white font-semibold text-sm drop-shadow">{ski.label}</span>
        </div>
      ))}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors z-10" data-testid="button-carousel-prev">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors z-10" data-testid="button-carousel-next">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {BASE_FLEET.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#3AB9F8]" : "bg-white/40"}`} data-testid={`button-carousel-dot-${i}`} />
        ))}
      </div>
      <div className="absolute top-3 right-3 z-10">
        <Badge className="bg-[#0B192D]/70 text-white border-white/20 text-xs backdrop-blur-sm">
          {current + 1} / {BASE_FLEET.length}
        </Badge>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const whyItems = [
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Premium Marina Launch",
      desc: "Launch directly from Blue Turtle Bay Marina with premium waterfront access, professional equipment, and a smooth dockside experience from arrival to ride.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Fast Online Booking",
      desc: "Reserve your jet ski online in minutes with instant availability, secure checkout, and streamlined waiver and boating compliance options.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety-Focused Check-in",
      desc: "Our team prioritizes safety with professional orientation, equipment walkthroughs, and operator verification before every ride.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great for Locals & Visitors",
      desc: "Whether you're a Nashville local or visiting Old Hickory Lake, NashSki delivers an easy and exciting lake-day experience for all experience levels.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Located at Blue Turtle Bay",
      desc: "Conveniently located onsite at Blue Turtle Bay Marina with direct access to waterfront dining, boat rentals, and marina amenities.",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Easy Access to Lake Amenities",
      desc: "Enjoy a full destination experience with nearby fuel access, dining, restrooms, parking, and waterfront entertainment all in one location.",
    },
  ];

  const faqs = [
    {
      q: "Do I need a boating license to rent a jet ski?",
      a: "Guests born after January 1, 1989 must satisfy one approved operator qualification before launch. Accepted options include a Tennessee Boater Education Card, a NASBLA-approved certification from another state, or the Rental PWC Safety Course.",
    },
    {
      q: "What if I don't have a boating certification?",
      a: "You may complete the Rental Boat Safety Personal Watercraft Course at rentalboatsafety.com/personal-watercraft before your arrival. It's fully online and self-paced.",
    },
    {
      q: "How old do you have to be to rent a jet ski?",
      a: "You must be 21 years old or older to rent a jet ski with NashSki.",
    },
    {
      q: "What do I need to bring to check-in?",
      a: "A valid government-issued photo ID, your applicable boating certification or course completion proof, and a completed NashSki waiver.",
    },
    {
      q: "Where are you located?",
      a: "NashSki is located at Blue Turtle Bay Marina on Old Hickory Lake, just outside Nashville, TN.",
    },
    {
      q: "How do I book?",
      a: "Use the Book Now or Check Availability buttons on this website to reserve your ride online. You can also call our onsite tiki hut at 615-547-8104.",
    },
    {
      q: "Is fuel included?",
      a: "Fuel is handled at checkout — either online or onsite. You'll have two options: (1) choose our refuel service and we'll take care of it for you at a surcharge rate per hour rented, or (2) return the PWC with a full tank of gas at the end of your rental.",
    },
    {
      q: "Are taxes and booking fees included?",
      a: "Taxes and booking fees are shown clearly during checkout before payment.",
    },
    {
      q: "What if the weather is bad?",
      a: "If NashSki cancels a rental due to unsafe weather, mechanical failure, government restrictions, or other safety concerns, you'll receive a full rental credit valid for 12 months or an alternative rescheduled date. Overcast skies, clouds, light rain, or cooler temps alone do not qualify for cancellation. If the National Weather Service issues severe thunderstorm, tornado, lightning, or high wind warnings for the Old Hickory Lake area, we reserve the right to postpone or cancel for safety. All cancellation and rescheduling decisions are made solely at NashSki's discretion in the interest of safety.",
    },
    {
      q: "Do I need to complete a waiver?",
      a: "Yes. All operators and participating guests must complete the NashSki liability waiver before launch. Completing it ahead of time speeds up check-in.",
    },
    {
      q: "Can groups book multiple jet skis?",
      a: "Yes, depending on availability. Check availability online or call NashSki at 615-547-8104 for group booking assistance.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B192D]/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#hero" className="flex-shrink-0" data-testid="link-logo">
            <img src={logo} alt="NashSki Rentals" className="h-8 md:h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/90 hover:text-white text-sm font-medium transition-colors" data-testid="link-nav-about">About</a>
            <a href="#pricing" className="text-white/90 hover:text-white text-sm font-medium transition-colors" data-testid="link-nav-pricing">Pricing</a>
            <a href="#location" className="text-white/90 hover:text-white text-sm font-medium transition-colors" data-testid="link-nav-location">Location</a>
            <a href="#experience" className="text-white/90 hover:text-white text-sm font-medium transition-colors" data-testid="link-nav-experience">Experience</a>
            <a href="#faq" className="text-white/90 hover:text-white text-sm font-medium transition-colors" data-testid="link-nav-faq">FAQ</a>
            <Button asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-semibold px-6" data-testid="button-nav-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* ─── SECTION 1: HERO ─── */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Old Hickory Lake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B192D]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B192D]/80 via-[#0B192D]/40 to-[#0B192D]/90"></div>
        </div>

        <div className="container relative z-10 px-5 py-12 md:py-32 flex flex-col items-center text-center w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img src={logo} alt="NashSki Rentals" className="h-20 md:h-36 w-auto mx-auto drop-shadow-lg" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center w-full max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-5 px-2 w-full flex justify-center">
              <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-hero-location-badge">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-3 py-1.5 text-xs md:text-sm backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer text-center leading-snug">
                  <MapPin className="w-3 h-3 mr-1.5 inline flex-shrink-0" />
                  Blue Turtle Bay Marina · Old Hickory Lake · Nashville, TN
                </Badge>
              </a>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-sm px-2 w-full">
              Premium Jet Ski Rentals on <span className="text-[#3AB9F8]">Old Hickory Lake</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-xl text-white/90 mb-8 max-w-xl font-light px-2">
              Launch directly from Blue Turtle Bay Marina — just outside Nashville.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto mb-12 px-2">
              <Button size="lg" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 text-base md:text-lg h-12 md:h-14 px-8 w-full sm:w-auto font-bold" data-testid="button-hero-book">
                <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10 text-base md:text-lg h-12 md:h-14 px-8 w-full sm:w-auto" data-testid="button-hero-availability">
                <a href={TRYTN_AVAILABILITY} target="_blank" rel="noopener noreferrer">Check Availability</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 w-full max-w-4xl border-t border-white/10 pt-6 px-2">
              {[
                { icon: <Shield className="w-5 h-5 mb-1.5 text-[#3AB9F8]" />, label: "Licensed & Insured" },
                { icon: <Anchor className="w-5 h-5 mb-1.5 text-[#3AB9F8]" />, label: "Blue Turtle Bay Marina" },
                { icon: <CheckCircle className="w-5 h-5 mb-1.5 text-[#3AB9F8]" />, label: "Online Booking" },
                { icon: <Star className="w-5 h-5 mb-1.5 text-[#3AB9F8]" />, label: "Safety-Focused" },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center text-white/80">
                  {b.icon}
                  <span className="text-xs font-medium text-center leading-snug">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: BOOKING / AVAILABILITY ─── */}
      <section id="availability" className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ride</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your rental duration below — availability opens directly on our booking platform. Weekends fill fast.
            </p>
          </div>

          {/* Duration selector grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { hours: 1, id: "9718fda5-9a75-46d0-95c4-81a2a854ba21", popular: true },
              { hours: 2, id: "05d4a529-7d0e-447f-bc24-331108da8bb8", popular: true },
              { hours: 3, id: "0c96a66b-20aa-4325-9539-02dad5c65492", popular: false },
              { hours: 4, id: "0fdc4601-278b-40f5-9ac9-1276d1edabd7", popular: true },
              { hours: 5, id: "1dd33472-0101-40ec-9a02-83212da7bf92", popular: false },
              { hours: 6, id: "1057ea1f-becc-414a-9e2a-01f8fe2d3b95", popular: false },
              { hours: 7, id: "9f7d5e49-d4d4-44f9-b2dd-2aa2013b9c9d", popular: false },
              { hours: 8, id: "c4c9cf98-6592-428d-b780-d502b9d4178e", popular: false },
            ].map(({ hours, id, popular }) => (
              <a
                key={hours}
                href={`https://trytn.com/en/NashSkiLLC/details/${id}?typeOfProduct=Activity`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border-2 ${popular ? "border-[#3AB9F8] shadow-md" : "border-border hover:border-[#3AB9F8]"}`}
                data-testid={`button-book-${hours}hr`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3AB9F8] text-[#0B192D] text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <span className="text-4xl font-extrabold text-[#0B192D] group-hover:text-[#3AB9F8] transition-colors leading-none mb-1">
                  {hours}
                </span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  {hours === 1 ? "Hour" : "Hours"}
                </span>
                <span className="mt-3 text-xs font-bold text-[#3AB9F8] opacity-0 group-hover:opacity-100 transition-opacity">
                  Check Availability →
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mb-8">
            All rentals accommodate 1–2 riders · Select a duration to view real-time availability &amp; complete booking
          </p>

          <div className="flex justify-center">
            <Button size="lg" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 px-10 font-bold h-14 text-lg" data-testid="button-calendar-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">View All Availability</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE NASHSKI EXPERIENCE ─── */}
      <section id="experience" className="py-24 bg-[#0B192D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" width="100" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">More Than a Jet Ski Rental — A Full Lake Day Experience</h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              NashSki brings a premium, marina-based jet ski rental experience to Old Hickory Lake with easy online booking, professional check-in, and direct access to one of Middle Tennessee's best lake destinations.
            </p>
          </div>

          {/* Change 2: placeholder images on each experience card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-[#3AB9F8]" />,
                title: "Arrive at Blue Turtle Bay Marina",
                text: "Check in directly at the marina for a seamless start to your day.",
                imgSrc: marinaPic,
                imgLabel: "Marina Arrival Photo",
                link: DIRECTIONS_LINK,
                linkLabel: "View Marina",
              },
              {
                icon: <Droplets className="w-8 h-8 text-[#3AB9F8]" />,
                title: "Ride Old Hickory Lake",
                text: "Fun, fast, scenic jet ski experience just outside Nashville.",
                imgSrc: jetskiRidePic,
                imgLabel: "On The Water Photo",
              },
              {
                icon: <Sun className="w-8 h-8 text-[#3AB9F8]" />,
                title: "Relax After Your Ride",
                text: "Grab a bite and a drink at Sam's Sports Grill — right onsite at Blue Turtle Bay Marina — for the perfect waterfront finish to your lake day.",
                imgSrc: foodPic,
                imgLabel: "Waterfront Relax Photo",
                link: SAMS_GRILL_LINK,
                linkLabel: "Sam's Sports Grill",
              },
              {
                icon: <Users className="w-8 h-8 text-[#3AB9F8]" />,
                title: "Perfect For",
                text: "Families, visitors, locals, birthdays, and group outings.",
                imgSrc: groupPic,
                imgLabel: "Group Fun Photo",
              },
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden">
                <div className="aspect-[4/3] bg-white/10 border-b border-white/10 overflow-hidden relative">
                  {"imgSrc" in item && item.imgSrc ? (
                    <img src={item.imgSrc as string} alt={item.imgLabel} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <Camera className="w-10 h-10 text-[#3AB9F8]/50 mb-2" />
                      <span className="text-white/40 text-xs text-center px-3">{item.imgLabel}</span>
                      <Badge className="absolute bottom-2 right-2 bg-[#3AB9F8]/20 text-[#3AB9F8] border-0 text-xs">Photo coming soon</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="pt-5 text-center md:text-left flex flex-col items-center md:items-start px-5 pb-5">
                  <div className="mb-3 p-2.5 bg-white/10 rounded-full inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{item.text}</p>
                  {"link" in item && item.link && (
                    <a href={item.link as string} target="_blank" rel="noopener noreferrer" className="text-[#3AB9F8] text-xs font-semibold hover:underline flex items-center gap-1 mt-auto">
                      {item.linkLabel as string} →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 h-14 px-10 text-lg font-bold" data-testid="button-experience-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Your Lake Day</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FLEET / RENTALS ─── */}
      {/* Change 3: 2 options — carousel for base fleet, single card for premium */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Jet Ski Rentals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your ride and reserve your time online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Card 1 — Standard Fleet (carousel) */}
            <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow group">
              <FleetCarousel />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">Standard Fleet</h3>
                  <Badge className="bg-[#0B192D] text-white">5 Skis Available</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Yamaha EX Deluxe · EX Sport · Sea-Doo Spark</p>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className="flex items-center text-[#0B192D]"><span className="text-[#3AB9F8] mr-1 font-bold">$</span>From $110/hr</span>
                  <span className="text-muted-foreground flex items-center"><Users className="w-4 h-4 mr-1 inline" />Up to 2 riders per jet ski</span>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">
                  Great for individuals, couples, and groups. Top speeds around 50MPH — perfect for a fun and fast lake day on Old Hickory Lake.
                </p>
                <Button className="w-full bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-bold" asChild data-testid="button-fleet-book-standard">
                  <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 — Premium Yamaha VX High Output */}
            <Card className="overflow-hidden border-[#3AB9F8]/40 hover:shadow-xl transition-shadow group relative">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-[#3AB9F8] text-[#0B192D] font-bold px-3 py-1 text-sm shadow">Premium</Badge>
              </div>
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={premiumPic} alt="Yamaha VX High Output" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192D]/50 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">Yamaha VX High Output</h3>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className="flex items-center text-[#0B192D]"><span className="text-[#3AB9F8] mr-1 font-bold">$</span>From $125/hr</span>
                  <span className="text-muted-foreground flex items-center"><Users className="w-4 h-4 mr-1 inline" />Up to 2 riders per jet ski</span>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">
                  Our premium ride — the Yamaha VX High Output delivers elevated performance, reaching speeds of 65MPH, with extra power and a top-of-the-line experience on Old Hickory Lake.
                </p>
                <Button className="w-full bg-[#0B192D] text-white hover:bg-[#0B192D]/90 font-bold" asChild data-testid="button-fleet-book-premium">
                  <a href={PREMIUM_LINK} target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Pricing, fuel options, taxes, and booking fees are shown during checkout before payment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHY CHOOSE NASHSKI ─── */}
      {/* Change 4: each box is now an accordion dropdown with descriptions */}
      <section id="about" className="py-24 bg-muted/40">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Riders Choose NashSki</h2>
          </div>

          <Accordion type="multiple" className="grid md:grid-cols-2 gap-4 mb-12">
            {whyItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <AccordionItem value={`why-${i}`} className="border-0">
                  <AccordionTrigger
                    className="px-5 py-4 hover:bg-muted/30 hover:no-underline font-semibold text-left gap-3 [&>svg]:shrink-0"
                    data-testid={`accordion-why-${i}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B192D]/5 flex items-center justify-center text-[#0B192D]">
                        {item.icon}
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border">
                    <p className="pt-3">{item.desc}</p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>

          <div className="text-center">
            <Button size="lg" asChild className="bg-[#0B192D] text-white hover:bg-[#0B192D]/90 h-14 px-10 text-lg font-bold" data-testid="button-why-reserve">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Reserve Your Ride</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5b: GOOGLE REVIEWS ─── */}
      {/* Change 5: Google Reviews placeholder */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Riders Say</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We're building our review base — check back soon and leave us a review after your ride.
            </p>
          </div>

          {/* Google Reviews embed placeholder */}
          <div className="bg-muted/30 border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center mb-10 min-h-[200px]">
            <Star className="w-12 h-12 text-yellow-400/50 mb-4" />
            <p className="font-semibold text-lg text-muted-foreground mb-2">Google Reviews — Embed Coming Soon</p>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Our Google Business reviews will be displayed here. Be among the first to leave a review!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[#0B192D] text-white hover:bg-[#0B192D]/90 font-bold"
              data-testid="button-google-review"
            >
              <a href={GOOGLE_REVIEWS_LINK} target="_blank" rel="noopener noreferrer">
                Leave Us a Google Review
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-reviews-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Your Ride</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5c: GALLERY & COMMERCIAL ─── */}
      {/* Change 6: Photo gallery + commercial video placeholders */}
      <section id="gallery" className="py-24 bg-[#0B192D]">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See NashSki in Action</h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">Photos and video coming soon. Check back after our upcoming shoot.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Photo Gallery Placeholder */}
            <div className="rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-10 flex flex-col items-center justify-center min-h-[300px]">
              <Camera className="w-14 h-14 text-[#3AB9F8]/50 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Photo Gallery</h3>
              <p className="text-white/50 text-sm text-center max-w-xs">
                Our photo gallery will live here. Real shots from the lake, the marina, and our fleet — coming soon.
              </p>
              <Badge className="mt-5 bg-white/10 text-white/60 border-0">Photos coming soon</Badge>
            </div>

            {/* Commercial Video Placeholder */}
            <div className="rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-10 flex flex-col items-center justify-center min-h-[300px]">
              <Play className="w-14 h-14 text-[#3AB9F8]/50 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">NashSki Commercial</h3>
              <p className="text-white/50 text-sm text-center max-w-xs">
                Our brand commercial is currently in production. Check back soon to watch the full video.
              </p>
              <Badge className="mt-5 bg-white/10 text-white/60 border-0">Video coming soon</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BLUE TURTLE BAY MARINA ─── */}
      {/* Change 7: Real Google Maps embed + real directions link */}
      <section id="location" className="py-24 bg-[#0B192D]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-white">
              <Badge className="bg-[#3AB9F8]/20 text-[#3AB9F8] hover:bg-[#3AB9F8]/30 mb-6 px-3 py-1 border-0">Our Location</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Located at Blue Turtle Bay Marina</h2>
              <p className="text-lg text-white/80 mb-8 font-light">
                NashSki operates directly from Blue Turtle Bay Marina on Old Hickory Lake, giving guests a convenient launch location with a full marina atmosphere.
              </p>

              <h3 className="text-2xl font-semibold mb-6">Make It a Full Lake Day</h3>
              <ul className="space-y-4 mb-10 text-white/90">
                {[
                  "Premium jet ski rentals with NashSki",
                  "Beautiful marina waterfront",
                  "Nearby food & drinks",
                  "Easy lake access",
                  "Great for groups, families & visitors",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3AB9F8] flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-bold"
                  data-testid="button-location-directions"
                >
                  <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 bg-transparent font-bold" data-testid="button-location-book">
                  <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
              </div>
            </div>

            {/* Map column — Old Hickory Lake visitors map + Google Maps embed */}
            <div className="flex-1 w-full lg:max-w-lg space-y-6">
              {/* Old Hickory Lake visitors map */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={oldHickoryMap}
                  alt="Old Hickory Lake Visitors Map — NashSki location"
                  className="w-full h-auto object-cover"
                  data-testid="img-old-hickory-map"
                />
              </div>
              {/* Google Maps iframe */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10" style={{ height: 320 }}>
                <iframe
                  title="NashSki Location"
                  src="https://maps.google.com/maps?q=NashSki+Jet+Ski+Rentals,+Old+Hickory+Lake,+Nashville,+TN&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="iframe-google-map"
                />
              </div>
              <div className="text-center">
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3AB9F8] text-sm hover:underline font-medium"
                  data-testid="link-map-directions"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BOATER CERTIFICATION ─── */}
      <section id="requirements" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Boater Certification & Operator Requirements</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To operate a jet ski in Tennessee, guests born after January 1, 1989 must satisfy at least one approved operator qualification prior to launch.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg border border-border text-sm text-muted-foreground flex gap-3">
              <Shield className="w-5 h-5 text-[#0B192D] flex-shrink-0 mt-0.5" />
              <p><strong>Note:</strong> Guests born before Jan 1, 1989 are not required by TN law to hold certification, but all NashSki safety, check-in, and waiver requirements still apply.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-bold text-xl mb-3">Tennessee Boater Education Card</h3>
                <p className="text-muted-foreground flex-grow">TWRA Lifetime Boater Education Certification</p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-bold text-xl mb-3">NASBLA-Approved Certification</h3>
                <p className="text-muted-foreground flex-grow">Out-of-state boating certifications may be accepted if NASBLA-approved from another state</p>
              </CardContent>
            </Card>
            <Card className="border-[#3AB9F8]/40 shadow-sm hover:shadow-md transition-shadow bg-[#3AB9F8]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#3AB9F8] text-[#0B192D] text-xs font-bold px-3 py-1 rounded-bl-lg">
                Recommended
              </div>
              <CardContent className="p-6 flex flex-col h-full pt-8">
                <h3 className="font-bold text-xl mb-3 text-[#0B192D]">NashSki Rental PWC Safety Course</h3>
                <p className="text-muted-foreground flex-grow mb-6">Complete the Rental Boat Safety Personal Watercraft Course prior to arrival</p>
                <Button className="w-full bg-[#0B192D] text-white hover:bg-[#0B192D]/90" asChild data-testid="button-cert-pwc-course">
                  <a href="https://www.rentalboatsafety.com/personal-watercraft" target="_blank" rel="noopener noreferrer">
                    Start PWC Safety Course
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 border border-border rounded-xl overflow-hidden bg-white shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 text-lg font-semibold data-[state=open]:bg-muted/30">
                  Tennessee Boater Education Certification Option
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="space-y-6 mt-4">
                    <ol className="relative border-l border-muted-foreground/20 ml-3 space-y-6">
                      {[
                        {
                          title: "Visit the TWRA Boating Education Page",
                          action: (
                            <Button size="sm" variant="outline" className="mt-2" asChild data-testid="button-twra-link">
                              <a href="https://www.tn.gov/twra/boating/boating-education.html" target="_blank" rel="noopener noreferrer">
                                Complete Tennessee Boater Education <ArrowRight className="w-3 h-3 ml-2" />
                              </a>
                            </Button>
                          ),
                        },
                        { title: "Choose a TWRA-Approved Course Provider" },
                        { title: "Complete the Online Course (fully online, self-paced)" },
                        { title: "Pass the Final Exam" },
                        { title: "Receive Your Boater Education Card (valid for life)" },
                        { title: "Bring Proof to Your Reservation" },
                      ].map((step, i) => (
                        <li key={i} className="pl-8 relative">
                          <div className="absolute w-6 h-6 bg-[#0B192D] rounded-full flex items-center justify-center text-xs font-bold text-white -left-3 top-0 border-4 border-white shadow-sm">
                            {i + 1}
                          </div>
                          <h4 className="font-semibold text-lg">{step.title}</h4>
                          {step.action}
                        </li>
                      ))}
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-[#0B192D]/5 border-2 border-[#0B192D]/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-12">
            <div className="flex-shrink-0 p-4 bg-[#0B192D] text-white rounded-full">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-[#0B192D]">Required At Check-In</h3>
              <p className="text-lg text-[#0B192D]/80 font-medium">
                Valid government-issued photo ID <span className="text-[#3AB9F8] mx-1">+</span> applicable boating certification/course completion <span className="text-[#3AB9F8] mx-1">+</span> completed NashSki waiver
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#0B192D] text-white hover:bg-[#0B192D]/90" asChild data-testid="button-req-course">
              <a href="https://www.rentalboatsafety.com/personal-watercraft" target="_blank" rel="noopener noreferrer">Start PWC Safety Course</a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-req-waiver">
              <a href={WAIVER_LINK} target="_blank" rel="noopener noreferrer">Complete Waiver</a>
            </Button>
            <Button size="lg" className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-bold" asChild data-testid="button-req-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: WAIVER ─── */}
      <section id="waiver" className="py-20 bg-[#3AB9F8]/10 border-y border-[#3AB9F8]/20">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B192D]">Complete Your Waiver Before Arrival</h2>
          <p className="text-lg text-[#0B192D]/70 mb-10 max-w-2xl mx-auto">
            All operators and participating guests must complete the required NashSki liability waiver before launch. Completing your waiver ahead of time helps speed up check-in.
          </p>
          <Button size="lg" asChild className="bg-[#0B192D] text-white hover:bg-[#0B192D]/90 text-lg h-16 px-12 mb-6 shadow-lg" data-testid="button-waiver-complete">
            <a href={WAIVER_LINK} target="_blank" rel="noopener noreferrer">Complete Waiver</a>
          </Button>
          <p className="text-sm text-[#0B192D]/60 font-medium max-w-xl mx-auto">
            Operators must also bring a government-issued photo ID and any required boating certification or course completion proof.
          </p>
        </div>
      </section>

      {/* ─── SECTION 9: FAQ ─── */}
      {/* Changes 8–12 applied to individual FAQ answers */}
      <section id="faq" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-6 bg-white hover:bg-muted/20 transition-colors">
                <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:no-underline" data-testid={`accordion-faq-${i}`}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── SECTION 10: FINAL CTA ─── */}
      <section className="py-24 bg-[#0B192D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192D] to-transparent z-0"></div>

        <div className="container px-4 mx-auto relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">Ready to Ride Old Hickory Lake?</h2>
          <p className="text-xl text-white/90 mb-12 font-light drop-shadow-sm max-w-2xl mx-auto">
            Book your NashSki jet ski rental online and enjoy a premium lake-day experience from Blue Turtle Bay Marina.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 h-14 px-8 text-lg w-full sm:w-auto shadow-lg font-bold" data-testid="button-final-book">
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/50 text-white hover:bg-white/10 bg-[#0B192D]/20 backdrop-blur-sm h-14 px-8 text-lg w-full sm:w-auto" data-testid="button-final-availability">
              <a href={TRYTN_AVAILABILITY} target="_blank" rel="noopener noreferrer">Check Availability</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/50 text-white hover:bg-white/10 bg-[#0B192D]/20 backdrop-blur-sm h-14 px-8 text-lg w-full sm:w-auto" data-testid="button-final-waiver">
              <a href={WAIVER_LINK} target="_blank" rel="noopener noreferrer">Complete Waiver</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      {/* Change 13: Get In Touch section with email, phone, Instagram & Facebook */}
      <footer className="bg-[#0B192D] border-t border-white/10 text-white">
        {/* Get In Touch */}
        <div className="border-b border-white/10 py-16">
          <div className="container px-4 mx-auto max-w-4xl flex flex-col items-center text-center">
            {/* Circular NashSki logo */}
            <div
              className="mb-8 relative w-56 h-56 rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f0f8ff 35%, #cce8f6 65%, #8ecfe8 100%)",
                boxShadow: "0 20px 60px rgba(11,25,45,0.6), 0 8px 20px rgba(11,25,45,0.4), inset 0 -8px 20px rgba(11,25,45,0.15), inset 0 4px 12px rgba(255,255,255,0.9)",
              }}
            >
              <img src={circleLogo} alt="NashSki Rentals" className="absolute inset-0 w-full h-full object-contain" data-testid="img-footer-circle-logo" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-white/60 mb-8 text-sm">Have questions? We're happy to help.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:bookings@nashski.com"
                className="flex items-center gap-2 text-white/80 hover:text-[#3AB9F8] transition-colors font-medium"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5 text-[#3AB9F8]" />
                bookings@nashski.com
              </a>
              <a
                href="tel:6155478104"
                className="flex items-center gap-2 text-white/80 hover:text-[#3AB9F8] transition-colors font-medium"
                data-testid="link-footer-phone"
              >
                <Phone className="w-5 h-5 text-[#3AB9F8]" />
                615-547-8104
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-[#3AB9F8]/20 transition-colors rounded-full px-5 py-2.5 text-white/80 hover:text-white font-medium text-sm"
                data-testid="link-footer-instagram"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-[#3AB9F8]/20 transition-colors rounded-full px-5 py-2.5 text-white/80 hover:text-white font-medium text-sm"
                data-testid="link-footer-facebook"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Footer nav + copyright */}
        <div className="py-10 pb-24 md:pb-10">
          <div className="container px-4 mx-auto flex flex-col items-center">
            <p className="text-base font-medium text-white/70 mb-6 tracking-wide">
              Old Hickory Lake <span className="text-[#3AB9F8] mx-2">·</span> Nashville, TN
            </p>

            <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-white/60">
              <a href="#about" className="hover:text-[#3AB9F8] transition-colors" data-testid="link-footer-about">About</a>
              <a href="#pricing" className="hover:text-[#3AB9F8] transition-colors" data-testid="link-footer-pricing">Pricing</a>
              <a href="#location" className="hover:text-[#3AB9F8] transition-colors" data-testid="link-footer-location">Location</a>
              <a href="#experience" className="hover:text-[#3AB9F8] transition-colors" data-testid="link-footer-experience">Experience</a>
              <a href="#faq" className="hover:text-[#3AB9F8] transition-colors" data-testid="link-footer-faq">FAQ</a>
              <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer" className="hover:text-[#3AB9F8] transition-colors text-white font-semibold" data-testid="link-footer-book">Book Now</a>
            </nav>

            <div className="text-white/30 text-sm text-center">
              <p>© {new Date().getFullYear()} NashSki LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-[#0B192D]/95 backdrop-blur-md border-t border-white/10 z-50">
        <Button size="lg" asChild className="w-full bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 h-14 text-lg font-bold shadow-lg" data-testid="button-mobile-sticky-book">
          <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
        </Button>
      </div>
    </div>
  );
}
