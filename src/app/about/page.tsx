import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About Our Toy Shop</h1>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Story Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Founded in 2024, our toy shop began with a simple mission: to bring joy and wonder to children through carefully curated, high-quality toys that inspire creativity and learning.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small local store has grown into a beloved destination for families seeking toys that combine fun with educational value. We take pride in selecting toys that spark imagination, encourage development, and create lasting memories.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-gray-600">
                We carefully select each toy to ensure it meets our high standards for safety, durability, and educational value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Education</h3>
              <p className="text-gray-600">
                We believe in toys that not only entertain but also contribute to children's development and learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Community</h3>
              <p className="text-gray-600">
                We're committed to being more than just a store – we're a part of your community and your children's growth.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              We understand that toys play a crucial role in childhood development. That's why we:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Partner with reputable manufacturers who prioritize safety</li>
              <li>Offer a diverse selection to cater to different ages and interests</li>
              <li>Provide knowledgeable staff to help you make informed choices</li>
              <li>Support sustainable and eco-friendly toy options</li>
              <li>Maintain competitive prices without compromising on quality</li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Us Today</h2>
          <p className="text-gray-600 mb-6">
            We'd love to help you find the perfect toy for your little one.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
} 