import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = ({ isLoggedIn=false, user, onLogout }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="ml-2 text-2xl font-bold text-sky-500">Job<span className='text-black'>Portal</span></span>
          </Link>
        </div>

        {/* Navigation and User Menu */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600 font-medium">
              Jobs
            </Link>
            <Link to="/companies" className="text-gray-600 hover:text-blue-600 font-medium">
              Companies
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 font-medium">
              Resources
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
            variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 -mr-4"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* User Avatar or Login Button */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avater" />
                    {/* <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback> */}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">{user?.name}</span>
                  <span className="text-sm text-gray-500 truncate max-w-full">{user?.bio}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/applications" className="w-full cursor-pointer">My Applications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/saved-jobs" className="w-full cursor-pointer">Saved Jobs</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='flex items-center gap-2'>
                <Link to="/login"><Button className="px-5 bg-black text-white">
              Login
            </Button></Link>
            <Link to="/signup">
            <Button className="px-5 bg-black text-white">
              Signup
            </Button>
            </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-gray-50 border-t border-gray-200">
          <Link to="/jobs" className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Jobs
          </Link>
          <Link to="/companies" className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Companies
          </Link>
          <Link to="/resources" className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Resources
          </Link>
          <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
