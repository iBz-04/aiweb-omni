import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OmniSoftLandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-yellow-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">OmniSoft</h1>
            <button
              className="block sm:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
          <nav
            className={`${menuOpen ? "block" : "hidden"} sm:block mt-4 sm:mt-0`}
          >
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li>
                <a
                  href="#features"
                  className="hover:underline block py-1"
                  onClick={closeMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:underline block py-1"
                  onClick={closeMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline block py-1"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Updated Hero Section with Background */}
        <section
          id="hero"
          className="relative text-center mb-8 h-96 flex items-center justify-center rounded-lg overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/diekemzs9/image/upload/v1736691221/Vivid_illustration_of_a_technology-themed_abstract_landscape_with_elements_representing_connectivity_innovation_and_digital_transformation._Circuit_patterns_and_digital_waves_flowing_through_the_background_using_xoijaj.png')`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="relative z-10 px-4">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Welcome to OmniSoft
            </h2>
            <p className="mb-6 text-xl text-white">
              The ultimate solution for managing your software needs.
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg text-lg">
              Get Started
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-8">
          <h3 className="text-xl font-bold mb-4">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-black border border-gray-800">
              <CardHeader className="font-bold text-lg">Feature 1</CardHeader>
              <CardContent>
                <p>Description of feature 1.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-gray-800">
              <CardHeader className="font-bold text-lg">Feature 2</CardHeader>
              <CardContent>
                <p>Description of feature 2.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-8">
          <h3 className="text-xl font-bold mb-4">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-black border border-gray-800 text-center">
              <CardHeader className="font-bold text-lg">Basic Plan</CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$9/mo</p>
                <ul className="list-none mb-4">
                  <li>5 Projects</li>
                  <li>5 GB Storage</li>
                  <li>Email Support</li>
                </ul>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border border-gray-800 text-center">
              <CardHeader className="font-bold text-lg">
                Standard Plan
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$29/mo</p>
                <ul className="list-none mb-4">
                  <li>50 Projects</li>
                  <li>50 GB Storage</li>
                  <li>Priority Support</li>
                </ul>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border border-gray-800 text-center">
              <CardHeader className="font-bold text-lg">
                Premium Plan
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$99/mo</p>
                <ul className="list-none mb-4">
                  <li>Unlimited Projects</li>
                  <li>Unlimited Storage</li>
                  <li>24/7 Support</li>
                </ul>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-8">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form className="space-y-4 bg-black border border-gray-800 p-6 rounded-lg">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-black border border-gray-800"
              rows={4}
            ></textarea>
            <Button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-yellow-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2023 OmniSoft. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default OmniSoftLandingPage;
