import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Search, User, Menu, LogOut } from 'lucide-react';
import { useAuth, signOut } from '../lib/auth';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Connect, Explore, Engage</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-600 hover:text-indigo-600">Events</Link>
            {user?.role === 'organizer' ? (
              <>
                <Link to="/organizer/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
                <Link to="/create-event" className="text-gray-600 hover:text-indigo-600">Create Event</Link>
              </>
            ) : null}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                  <User className="h-5 w-5" />
                  <span>{user.full_name || user.username}</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Sign In
              </Link>
            )}
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;