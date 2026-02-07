"use client";

import { useState, useEffect } from "react";
import {
  Wifi,
  Car,
  Utensils,
  Wind,
  Tv,
  Hotel,
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";

const DIAMOND_LOGO =
  "https://ucarecdn.com/c5b19446-4e37-4662-b36e-0af959377ffa/-/format/auto/";

export default function DiamondCasaGuestHouse() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      image:
        "https://ucarecdn.com/8967b2e3-19b0-498f-8985-cc8eb64ab6fa/-/format/auto/",
      description:
        "Spacious luxury suite with golden accents, smart TV, air conditioning, and premium bedding",
    },
    {
      id: 2,
      name: "Deluxe Room",
      image:
        "https://ucarecdn.com/ddb14621-23d2-4d87-8e2b-f6d26c251411/-/format/auto/",
      description:
        "Modern room with ambient lighting, luxury bedding, smart TV, and elegant design",
    },
    {
      id: 3,
      name: "Premium Suite",
      image:
        "https://ucarecdn.com/759f4b4a-1843-4ca3-8f0d-ef9f6744cc27/-/format/auto/",
      description:
        "Contemporary suite with mood lighting, air conditioning, and sophisticated furnishings",
    },
    {
      id: 4,
      name: "Standard Room",
      image:
        "https://ucarecdn.com/66d7d4c4-557a-4a6f-8147-7e24e7ca676d/-/format/auto/",
      description:
        "Comfortable room with wood paneling, smart TV, and modern amenities",
    },
  ];

  const galleryImages = [
    "https://ucarecdn.com/4c109a1b-8643-43b6-b0dd-fb55ee9c4686/-/format/auto/",
    "https://ucarecdn.com/2e0eb5eb-d398-4873-8072-bb8fc2ea4189/-/format/auto/",
    "https://ucarecdn.com/9156a2d9-7d98-4e8c-a226-4803c9161ff7/-/format/auto/",
  ];

  const amenities = [
    {
      icon: Hotel,
      title: "Luxury Rooms & Suites",
      description: "Premium accommodation",
    },
    {
      icon: Zap,
      title: "24/7 Power Supply",
      description: "Uninterrupted service",
    },
    {
      icon: Wifi,
      title: "Free High-Speed Wi-Fi",
      description: "Stay connected",
    },
    {
      icon: Utensils,
      title: "Restaurant & Bar",
      description: "Fine dining experience",
    },
    { icon: Car, title: "Secure Parking", description: "Safe vehicle storage" },
    { icon: Hotel, title: "Room Service", description: "24/7 availability" },
    { icon: Wind, title: "Air Conditioning", description: "Climate control" },
    { icon: Tv, title: "Smart TVs", description: "Entertainment systems" },
  ];

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#121212] transition-colors duration-300">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img
                src={DIAMOND_LOGO}
                alt="Diamond Casa Guest House Logo"
                className="h-14 w-14 object-contain"
              />
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] bg-clip-text text-transparent">
                Diamond Casa Guest House
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#rooms"
                className="text-gray-700 dark:text-white/80 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors"
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-gray-700 dark:text-white/80 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors"
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="text-gray-700 dark:text-white/80 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-white/80 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors"
              >
                Contact
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="text-[#E5C158]" size={24} />
                ) : (
                  <Moon className="text-gray-700" size={24} />
                )}
              </button>

              <a
                href="tel:+2348069799865"
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#1E1E1E] border-t dark:border-gray-700 transition-colors duration-300">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#rooms"
                className="block py-2 text-gray-700 dark:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="block py-2 text-gray-700 dark:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="block py-2 text-gray-700 dark:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 dark:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              {/* Dark Mode Toggle for Mobile */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 py-2 text-gray-700 dark:text-white/80"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <a
                href="tel:+2348069799865"
                className="block text-center px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] text-white rounded-lg font-medium"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/8967b2e3-19b0-498f-8985-cc8eb64ab6fa/-/format/auto/)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Experience Comfort & Luxury at
            <br />
            <span className="text-[#D4AF37] dark:text-[#E5C158]">
              Diamond Casa Guest House
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-light">
            Your perfect stay in the heart of Calabar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+2348069799865"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Book a Room
            </a>
            <a
              href="tel:+2348069799865"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section
        id="rooms"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1E1E1E] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Rooms & Suites
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Discover our collection of beautifully designed rooms, each
              crafted for your ultimate comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="group bg-[#FAF8F5] dark:bg-[#262626] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl dark:shadow-lg dark:hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                    {room.description}
                  </p>
                  <a
                    href="tel:+2348069799865"
                    className="inline-block mt-6 px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section
        id="amenities"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] dark:bg-[#121212] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Everything you need for a perfect stay
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#262626] p-6 rounded-xl shadow-sm hover:shadow-lg dark:shadow-md dark:hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white/90 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1E1E1E] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              A glimpse into the Diamond Casa experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl dark:shadow-lg dark:hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-black/40 dark:group-hover:bg-black/60 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C2416] to-[#3D3020] dark:from-[#1A1410] dark:to-[#2C2416] transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Diamond Casa Guest House
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Welcome to Diamond Casa Guest House, where modern luxury meets
            exceptional hospitality in the heart of Calabar. We offer a premium
            experience for both business and leisure travelers, combining
            contemporary design with world-class amenities. Our commitment is to
            make every stay memorable, comfortable, and truly special.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] dark:bg-[#121212] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/70 flex items-center justify-center gap-2">
              <MapPin
                className="text-[#D4AF37] dark:text-[#E5C158]"
                size={24}
              />
              No 8 Agbor-Ntoe Layout Road 1, by Prince Ville Hotels, Calabar
              Municipality, Cross River
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl dark:shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3715392584876!2d8.324!3d4.9516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTcnMDUuOCJOIDjCsDE5JzI2LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1E1E1E] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Ready to book your stay? Contact us today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+2348069799865"
                    className="text-lg text-gray-600 dark:text-white/70 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors"
                  >
                    +234 806 979 9865
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:diamondcasa515@gmail.com"
                    className="text-lg text-gray-600 dark:text-white/70 hover:text-[#D4AF37] dark:hover:text-[#E5C158] transition-colors break-all"
                  >
                    diamondcasa515@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-2">
                    Address
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-white/70">
                    No 8 Agbor-Ntoe Layout Road 1, by Prince Ville Hotels,
                    <br />
                    Calabar Municipality, Cross River
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#FAF8F5] dark:bg-[#262626] p-8 rounded-2xl shadow-lg dark:shadow-xl transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-white/80 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E1E1E] text-gray-900 dark:text-white/90 focus:ring-2 focus:ring-[#D4AF37] dark:focus:ring-[#E5C158] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E1E1E] text-gray-900 dark:text-white/90 focus:ring-2 focus:ring-[#D4AF37] dark:focus:ring-[#E5C158] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E1E1E] text-gray-900 dark:text-white/90 focus:ring-2 focus:ring-[#D4AF37] dark:focus:ring-[#E5C158] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your booking needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  {formSubmitted ? "✓ Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1410] dark:bg-[#0A0806] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] dark:from-[#E5C158] dark:to-[#CFA73D] bg-clip-text text-transparent mb-4">
            Diamond Casa Guest House
          </h3>
          <p className="text-white/70 mb-6">
            Your perfect stay in the heart of Calabar
          </p>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Diamond Casa Guest House. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348069799865"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      >
        <MessageCircle className="text-white" size={32} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Smooth Scroll Style */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
