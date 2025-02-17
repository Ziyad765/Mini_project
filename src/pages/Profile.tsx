import React from 'react';
import { User, Calendar, Ticket, Heart, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-indigo-600" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Cultural enthusiast | Event organizer</p>
          </div>
          <button className="ml-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            <button className="px-6 py-4 text-indigo-600 border-b-2 border-indigo-600 font-semibold">
              Upcoming Events
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
              Past Events
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
              Favorites
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Event Card */}
            <div className="flex space-x-4 p-4 border border-gray-200 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
                alt="Event"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-indigo-600">Art</span>
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="font-semibold mb-1">Modern Art Exhibition</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2025</span>
                </div>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Confirmed
                  </span>
                </div>
              </div>
            </div>

            {/* More event cards would be dynamically rendered here */}
          </div>
        </div>
      </div>

      {/* Tickets Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">My Tickets</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold">View All</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Ticket className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold">Modern Art Exhibition</h3>
                <p className="text-sm text-gray-500">General Admission - 2 tickets</p>
              </div>
            </div>
            <button className="text-indigo-600 hover:text-indigo-700">
              View Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;