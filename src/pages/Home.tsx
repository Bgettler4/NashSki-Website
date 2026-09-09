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
  Camera, Play, Menu, X,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { PricingSection } from "@/components/PricingSection";
import logo from "@/assets/nashski/nashski-wordmark-white.png";
import circleLogo from "@/assets/circle-logo-transparent.png";
import circleLogoNew from "@/assets/generated_images/nashski-logo-3d.png";
import fleetPic1 from "@/assets/fleet/yamaha-ex-deluxe-1.jpg";
import fleetPic2 from "@/assets/fleet/yamaha-ex-sport-1.jpg";
import fleetPic3 from "@/assets/fleet/yamaha-ex-sport-2.jpg";
import fleetPic4 from "@/assets/fleet/sea-doo-gti-1.jpg";
import fleetPic5 from "@/assets/fleet/sea-doo-gti-2.jpg";
import premiumPic from "@/assets/fleet/yamaha-vx-high-output.jpg";
import oldHickoryMap from "@/assets/old-hickory-map.png";
import foodPic from "@/assets/sams-grill-waterfront.avif";
import groupPic from "@/assets/generated_images/friends-on-lake.png";

const jetskiRidePic = "/gallery/IMG_1359_hero.JPG";
const reelCoverPic = "/reel-cover.jpg";

const BOOK_NOW = "https://trytn.com/en/NashSkiLLC";
const TRYTN_AVAILABILITY = "https://trytn.com/en/NashSkiLLC";
const PREMIUM_LINK = "https://trytn.com/en/NashSkiLLC/details/a70857ba-e957-449c-9c55-85fa819a0db1?typeOfProduct=Activity";
const SAMS_GRILL_LINK = "https://www.samssportsgrill.com/location/sams-sports-grill-blue-turtle-bay/";
const WAIVER_LINK = "https://waiver.smartwaiver.com/w/2hfaueeolant2sum8db6h9/web/";
const DIRECTIONS_LINK = "https://google.com/maps/place/NashSki+Jet+Ski+Rentals/data=!4m2!3m1!1s0x0:0xa1b06d541270c539?sa=X&ved=1t:2428&ictx=111";
const INSTAGRAM_LINK = "https://www.instagram.com/nash.skii/";
const FACEBOOK_LINK = "https://www.facebook.com/people/NashSki/61567724215545/?sk=about";
const GOOGLE_REVIEWS_LINK = "https://g.page/r/CTnFcBJUbbChEAE/review";

const BASE_FLEET = [
  { label: "Yamaha EX Deluxe",       img: fleetPic1 },
  { label: "Yamaha EX Sport",        img: fleetPic2 },
  { label: "Yamaha EX Sport",        img: fleetPic3 },
  { label: "Sea-Doo GTI",            img: fleetPic4 },
  { label: "Sea-Doo GTI",            img: fleetPic5 },
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

const GOOGLE_G_SVG = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AVATAR_COLORS = ["#0B192D", "#1a6b9a", "#0d4a6b", "#145e8a", "#3AB9F8", "#0a3d5c"];

interface GoogleReview {
  authorName: string;
  authorPhotoUrl: string | null;
  authorProfileUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsData {
  name: string;
  rating: number | null;
  userRatingCount: number;
  reviews: GoogleReview[];
}

const CACHE_KEY = "nashski_reviews_cache";

const GALLERY_PHOTOS = [
  "/gallery/IMG_1351.JPG",
  "/gallery/IMG_1352.JPG",
  "/gallery/IMG_1353.JPG",
  "/gallery/IMG_1354.JPG",
  "/gallery/IMG_1355.JPG",
  "/gallery/IMG_1356.JPG",
  "/gallery/IMG_1357.JPG",
  "/gallery/IMG_1358.JPG",
  "/gallery/IMG_1359.JPG",
  "/gallery/IMG_1360.JPG",
  "/gallery/IMG_1361.JPG",
  "/gallery/IMG_1362.JPG",
  "/gallery/IMG_1363.JPG",
  "/gallery/IMG_1365.JPG",
];

function GallerySlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % GALLERY_PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  const next = () => setCurrent((c) => (c + 1) % GALLERY_PHOTOS.length);

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3] group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {GALLERY_PHOTOS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`NashSki on Old Hickory Lake — photo ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {GALLERY_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
        {current + 1} / {GALLERY_PHOTOS.length}
      </div>
    </div>
  );
}

const STATIC_REVIEWS: GoogleReview[] = [
  {
    authorName: "Rachelle Salisbury",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Just booked with NashSki Jet Rentals and I'm SO excited!! Heard nothing but great things about this place and can't wait for summer on the water. If you're looking for a fun day in Nashville, definitely check them out!",
    relativeTime: "a day ago",
  },
  {
    authorName: "Jessica Outen",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Just booked our jet skis with NashSki Jet Ski Rentals and we cannot wait!! Super easy booking process and everyone has said amazing things about them. Counting down the days already!",
    relativeTime: "a day ago",
  },
  {
    authorName: "Cooper Gettler",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Great experience, very friendly and helpful with anything I needed. Jet-skis were very fast for rentals and a blast. Bryce and Phillip were great guys and I would 100% come and check them out.",
    relativeTime: "a day ago",
  },
  {
    authorName: "Gavin Palmer",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Amazing experience with NashSki Rentals! The whole process was super easy from start to finish, the staff was friendly and helpful, and the jet skis were in great condition. We had an awesome time out on the water and could tell they really care about their customers.",
    relativeTime: "a day ago",
  },
  {
    authorName: "Terri Gettler",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Had a great time on the water! Bryce and Phillip were very friendly and the rental process was easy from start to finish. The equipment was in great condition — Highly recommend for anyone wanting to get out on the water!",
    relativeTime: "a day ago",
  },
  {
    authorName: "Sophia Pouliot",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Had an awesome experience with NashSki at Blue Turtle Bay Marina! The jet skis were clean, fast, and well-maintained, and the staff made the whole process super easy from start to finish. Everyone was friendly, professional, and made sure we had a great time.",
    relativeTime: "2 days ago",
  },
  {
    authorName: "Jacob Romero",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Bryce and Philip were extraordinary to work with in setting up a fun jet ski day with my bachelor group! Will definitely recommend to anyone that is interested in a fun time on the lake while in Nashville!",
    relativeTime: "2 days ago",
  },
  {
    authorName: "Blake Miller",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    rating: 5,
    text: "Was a great experience from booking until end. Will be back again next year with the family.",
    relativeTime: "2 days ago",
  },
];

function ReviewCard({ review, index }: { review: GoogleReview; index: number }) {
  const [imgError, setImgError] = useState(false);
  const initial = review.authorName.charAt(0).toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 flex flex-col h-full hover:bg-white/[0.09] hover:border-[#3AB9F8]/30 transition-all duration-200">
      <div className="text-[#3AB9F8] text-3xl font-serif leading-none mb-2 select-none">"</div>
      <p className="text-white/80 text-sm leading-relaxed flex-1 mb-4 line-clamp-5">
        {review.text || "Great experience on Old Hickory Lake!"}
      </p>
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-white/20 text-white/20"}`} />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        {review.authorPhotoUrl && !imgError ? (
          <img
            src={review.authorPhotoUrl}
            alt={review.authorName}
            className="w-9 h-9 rounded-full object-cover shrink-0"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
            style={{ backgroundColor: color }}
          >
            {initial}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-white font-semibold text-xs truncate">{review.authorName}</p>
          <p className="text-white/40 text-[11px]">{review.relativeTime}</p>
        </div>
        <div className="ml-auto shrink-0">{GOOGLE_G_SVG}</div>
      </div>
    </div>
  );
}

function mergeReviews(apiReviews: GoogleReview[], staticReviews: GoogleReview[]): GoogleReview[] {
  const apiNames = new Set(apiReviews.map((r) => r.authorName.toLowerCase().trim()));
  const extras = staticReviews.filter((r) => !apiNames.has(r.authorName.toLowerCase().trim()));
  return [...apiReviews, ...extras];
}

function GoogleReviewsSection() {
  const [data, setData] = useState<ReviewsData | null>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? (JSON.parse(cached) as ReviewsData) : null;
    } catch { return null; }
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => { if (!r.ok) throw new Error(); return r.json() as Promise<ReviewsData>; })
      .then((d) => {
        setData(d);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(d)); } catch { /* ignore */ }
      })
      .catch(() => { /* keep cached data if available */ });
  }, []);

  const rating = data?.rating ?? 5.0;
  const count = data?.userRatingCount ?? 0;
  const reviews = mergeReviews(data?.reviews ?? [], STATIC_REVIEWS);
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-[#0B192D]">
      <div className="border-b border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:justify-between">
            <div className="flex items-center gap-5">
              <img
                src={circleLogoNew}
                alt="NashSki"
                className="w-28 h-28 object-contain drop-shadow-[0_0_18px_rgba(58,185,248,0.5)] shrink-0"
              />
              <div>
                <p className="text-[#3AB9F8] text-xs font-bold uppercase tracking-widest mb-1">Old Hickory Lake · Nashville, TN</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  What Our Riders<br className="hidden sm:block" /> Are Saying
                </h2>
                <p className="text-white/50 text-sm mt-2 max-w-xs">
                  Real reviews from real riders on Old Hickory Lake.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1.5 shrink-0">
              <div className="flex items-center gap-2 mb-1">
                {GOOGLE_G_SVG}
                <span className="text-white/60 text-sm font-medium">Google Reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-6xl font-black text-white leading-none">{rating.toFixed(1)}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/40 text-xs">
                    {count > 0 ? `${count} review${count !== 1 ? "s" : ""}` : "Google Reviews"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-10 overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0B192D] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0B192D] to-transparent" />

        <div className={`flex gap-5 w-max ${paused ? "animate-reviews-marquee-paused" : "animate-reviews-marquee"}`}>
          {marqueeReviews.map((review, i) => (
            <div key={`${review.authorName}-${i}`} className="w-80 flex-shrink-0">
              <ReviewCard review={review} index={i % reviews.length} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-12">
        <div className="container mx-auto max-w-6xl pt-6 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <Button size="sm" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-bold" data-testid="button-google-review">
            <a href={GOOGLE_REVIEWS_LINK} target="_blank" rel="noopener noreferrer">★ Leave Us a Review</a>
          </Button>
          <a
            href={DIRECTIONS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#3AB9F8]/50 text-white/80 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all"
          >
            See All {count > 0 ? count : ""} Reviews on Google
            {GOOGLE_G_SVG}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      a: "",
      node: <>Guests born after January 1, 1989 must satisfy one approved operator qualification before launch. Accepted options include a Tennessee Boater Education Card, a NASBLA-approved certification from another state, or the <a href="https://www.rentalboatsafety.com/personal-watercraft" target="_blank" rel="noopener noreferrer" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">Rental PWC Safety Course</a>.</>,
    },
    {
      q: "What if I don't have a boating certification?",
      a: "",
      node: <>You may complete the <a href="https://www.rentalboatsafety.com/personal-watercraft" target="_blank" rel="noopener noreferrer" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">Rental Boat Safety Personal Watercraft Course</a> before your arrival. It's fully online and self-paced.</>,
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
      a: "",
      node: <>NashSki is located at Blue Turtle Bay Marina on Old Hickory Lake, just outside Nashville, TN. <a href="https://www.google.com/maps/place/NashSki+Jet+Ski+Rentals/@36.2514372,-86.6384876,17z/data=!3m1!4b1!4m6!3m5!1s0x8864416e9ad5a671:0xa1b06d541270c539!8m2!3d36.2514372!4d-86.6384876!16s%2Fg%2F11z7cyjx10?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">View us on Google Maps</a>.</>,
    },
    {
      q: "How do I book?",
      a: "",
      node: <>Use the <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">Book Now</a> or Check Availability buttons on this website to reserve your ride online. You can also call our onsite tiki hut at <a href="tel:6155478104" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">615-547-8104</a>.</>,
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
      a: "",
      node: <>Yes, depending on availability. Check availability online or call NashSki at <a href="tel:6155478104" className="text-[#0B192D] font-semibold underline underline-offset-2 hover:text-[#3AB9F8] transition-colors">615-547-8104</a> for group booking assistance.</>,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "bg-[#0B192D]/95 backdrop-blur-md shadow-md" : "bg-transparent"
        } ${mobileMenuOpen ? "py-3" : scrolled ? "py-3" : "py-5"}`}
      >
        <div className="container mx-auto px-8 md:px-10 flex items-center justify-between">
          <a href="#hero" className="flex-shrink-0 mr-6" data-testid="link-logo" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="NashSki Rentals" className="h-8 md:h-10 w-auto" />
          </a>
          {/* Desktop nav — all siblings share the same gap for equal spacing */}
          <nav className="hidden md:flex items-center gap-5">
            <a href="#hero" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide">Home</a>
            <a href="#about" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-about">About</a>
            <a href="#pricing" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-pricing">Pricing</a>
            <a href="#reviews" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-reviews">Reviews</a>
            <a href="#requirements" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-requirements">Rental Requirements</a>
            <a href="#experience" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-experience">Experience</a>
            <a href="#faq" className="text-white/90 hover:text-white text-xs font-medium transition-colors tracking-wide" data-testid="link-nav-faq">FAQ</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#3AB9F8] transition-colors" aria-label="Instagram" data-testid="link-nav-instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#3AB9F8] transition-colors" aria-label="Facebook" data-testid="link-nav-facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <div className="flex flex-col items-center gap-0.5">
              <Button asChild size="sm" className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 font-semibold px-5 h-8 text-xs w-full" data-testid="button-nav-book">
                <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <a href="tel:6155478104" className="text-[#3AB9F8] hover:text-white text-[10px] font-semibold flex items-center gap-1 transition-colors" data-testid="link-nav-phone">
                <Phone className="w-3 h-3" />615-547-8104
              </a>
            </div>
          </nav>

          {/* Mobile: quick-access phone link */}
          <a href="tel:6155478104" className="flex md:hidden items-center gap-1 text-[#3AB9F8] hover:text-white text-xs font-semibold mr-2 transition-colors" data-testid="link-nav-phone-mobile" aria-label="Call NashSki">
            <Phone className="w-4 h-4" />
            <span>615-547-8104</span>
          </a>

          {/* Mobile: hamburger button */}
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B192D]/98 backdrop-blur-md border-t border-white/10 px-4 pb-6 pt-4 flex flex-col gap-1">
            {[
              { label: "Home", href: "#hero" },
              { label: "Book Now", href: BOOK_NOW, external: true, highlight: true },
              { label: "Pricing", href: "#pricing" },
              { label: "Reviews", href: "#reviews" },
              { label: "Rental Requirements", href: "#requirements" },
              { label: "Experience", href: "#experience" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href, external, highlight }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  highlight
                    ? "bg-[#3AB9F8] text-[#0B192D] text-center"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </a>
            ))}
            {/* Social + phone row */}
            <div className="flex items-center justify-between mt-3 pt-4 border-t border-white/10 px-1">
              <div className="flex items-center gap-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#3AB9F8] transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#3AB9F8] transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <a href="tel:6155478104" className="flex items-center gap-2 text-[#3AB9F8] font-semibold text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" />615-547-8104
              </a>
            </div>
          </div>
        )}
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

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto px-2">
              <Button size="lg" asChild className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 text-base md:text-lg h-12 md:h-14 px-8 w-full sm:w-auto font-bold" data-testid="button-hero-book">
                <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10 text-base md:text-lg h-12 md:h-14 px-8 w-full sm:w-auto" data-testid="button-hero-availability">
                <a href={TRYTN_AVAILABILITY} target="_blank" rel="noopener noreferrer">Check Availability</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12 px-2 mt-4">
              <a href="tel:6155478104" className="inline-flex items-center gap-2 text-white hover:text-[#3AB9F8] text-base font-semibold transition-colors border border-white/30 hover:border-[#3AB9F8]/60 rounded-full px-5 py-2 bg-white/10 backdrop-blur-sm" data-testid="link-hero-call">
                <Phone className="w-4 h-4" />
                615-547-8104
              </a>
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

      <PricingSection />

      {/* ─── SECTION: GOOGLE REVIEWS ─── */}
      <GoogleReviewsSection />

      {/* ─── SECTION: BOATER CERTIFICATION ─── */}
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

          <div className="bg-[#0B192D] text-white rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-lg mb-4 text-[#3AB9F8]">Rental Requirements</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#3AB9F8] shrink-0 mt-0.5" />
                <p className="text-sm text-white/90"><span className="font-bold text-white">Must be 21 years or older</span> to rent a jet ski from NashSki.</p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#3AB9F8] shrink-0 mt-0.5" />
                <p className="text-sm text-white/90"><span className="font-bold text-white">Operators ages 16–20</span> may operate a jet ski only if they possess a valid boating certification (when required by Tennessee law) and have a parent or legal guardian complete and sign the required liability waiver.</p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#3AB9F8] shrink-0 mt-0.5" />
                <p className="text-sm text-white/90"><span className="font-bold text-white">All renters and operators</span> must review, understand, and agree to the NashSki Rental &amp; Operating Agreement, including all safety rules, policies, and operating requirements.</p>
              </li>
            </ul>
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
              { hours: 6, id: "1057ea1f-becc-414a-9e2a-01f8fe2d3b95", popular: false },
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

          {/* Experience cards with media */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-[#3AB9F8]" />,
                title: "Arrive at Blue Turtle Bay Marina",
                text: "Check in directly at the marina for a seamless start to your day.",
                reelCard: "https://www.instagram.com/reel/DZScl74xyip/",
                imgLabel: "Marina Directions Reel",
                link: DIRECTIONS_LINK,
                linkLabel: "Get Directions",
                link2: INSTAGRAM_LINK,
                linkLabel2: "Follow @nash.skii",
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
                imgClass: "object-contain",
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
                  {"reelCard" in item && item.reelCard ? (
                    <a
                      href={item.reelCard as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex flex-col items-center justify-center group/reel cursor-pointer overflow-hidden"
                    >
                      <img src={reelCoverPic} alt="NashSki Marina Directions Reel" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="relative z-10 flex flex-col items-center gap-3 text-white px-4 text-center">
                        <div className="flex items-center gap-2 text-xs font-semibold opacity-80">
                          <Instagram className="w-4 h-4" />
                          <span>@nash.skii</span>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover/reel:scale-110 transition-transform shadow-xl">
                          <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </div>
                        <p className="text-sm font-bold leading-snug">Directions to<br />Blue Turtle Bay Marina</p>
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium group-hover/reel:bg-white/30 transition-colors">
                          Watch Reel on Instagram
                        </span>
                      </div>
                    </a>
                  ) : "imgSrc" in item && item.imgSrc ? (
                    <img src={item.imgSrc as string} alt={item.imgLabel} className={`w-full h-full ${"imgClass" in item ? item.imgClass : "object-cover"}`} />
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
                  <div className="flex flex-col gap-1 mt-auto w-full">
                    {"link" in item && item.link && (
                      <a href={item.link as string} target="_blank" rel="noopener noreferrer" className="text-[#3AB9F8] text-xs font-semibold hover:underline flex items-center gap-1">
                        {item.linkLabel as string} →
                      </a>
                    )}
                    {"link2" in item && item.link2 && (
                      <a href={item.link2 as string} target="_blank" rel="noopener noreferrer" className="text-[#3AB9F8] text-xs font-semibold hover:underline flex items-center gap-1">
                        {item.linkLabel2 as string} →
                      </a>
                    )}
                  </div>
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
      <section className="py-24 bg-white">
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
                <p className="text-sm text-muted-foreground mb-3">Yamaha EX Deluxe · EX Sport · Sea-Doo GTI</p>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className="flex items-center text-[#0B192D] font-semibold">↑ See pricing above</span>
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
                  <span className="flex items-center text-[#0B192D] font-semibold">↑ See pricing above</span>
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

      {/* ─── SECTION 5c: GALLERY & COMMERCIAL ─── */}
      {/* Photo gallery and commercial video */}
      <section id="gallery" className="py-24 bg-[#0B192D]">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See NashSki in Action</h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">Real shots from the lake, the marina, and our fleet on Old Hickory Lake.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Photo Gallery Slideshow */}
            <div>
              <GallerySlideshow />
              <p className="text-white/40 text-xs text-center mt-3">Hover to pause · click arrows or dots to navigate</p>
            </div>

            {/* Commercial Video */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src="https://www.youtube.com/embed/RZqSzK3INlE?rel=0&modestbranding=1"
                  title="NashSki Rentals Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <p className="text-white/40 text-xs text-center mt-3">NashSki Rentals — Official Commercial</p>
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
                  {"node" in faq ? faq.node : faq.a}
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
      <footer id="contact" className="bg-[#0B192D] border-t border-white/10 text-white">
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
