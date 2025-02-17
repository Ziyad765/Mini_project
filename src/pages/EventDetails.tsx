import React from 'react';
import { Calendar, MapPin, Users, Star, Clock, Share2 } from 'lucide-react';

const EventDetails = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Event Header */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
          alt="Event cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">Art</span>
            <span className="text-sm">March 15, 2025</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Modern Art Exhibition</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Metropolitan Museum</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>2:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
            <p className="text-gray-600">
              Join us for an extraordinary exhibition featuring contemporary artworks from emerging artists around the globe. 
              This curated collection showcases diverse perspectives and innovative techniques in modern art.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Opening Reception</h3>
                  <p className="text-gray-600">2:00 PM - Meet the artists and enjoy welcome drinks</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Guided Tour</h3>
                  <p className="text-gray-600">3:00 PM - Expert-led tour of the exhibition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tickets</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">General Admission</span>
                  <span className="text-lg font-bold">$25</span>
                </div>
                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Book Now
                </button>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">VIP Access</span>
                  <span className="text-lg font-bold">$50</span>
                </div>
                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Share</h2>
            <button className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              <span>Share Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;