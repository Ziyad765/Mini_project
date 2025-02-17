import React from 'react';
import { ArrowRight, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 rounded-3xl" />
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="Cultural event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-6">
                  Discover Amazing Cultural Events
                </h1>
                <p className="text-xl mb-8">
                  Connect with your community, explore new experiences, and engage with diverse cultures.
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Events</h3>
            <p className="text-gray-600">
              Discover hand-picked cultural events that match your interests.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Connect with like-minded people who share your cultural interests.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Events verified by our community through reviews and ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Events</h2>
          <Link to="/events" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event cards will be dynamically populated */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
              alt="Music festival"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-indigo-600 font-semibold">Music</span>
              <h3 className="text-xl font-semibold mt-2">Summer Music Festival</h3>
              <p className="text-gray-600 mt-2">Experience the best of local and international artists...</p>
              <div className="mt-4">
                <Link
                  to="/events/1"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* More event cards... */}
        </div>
      </section>
    </div>
  );
};

export default Home;