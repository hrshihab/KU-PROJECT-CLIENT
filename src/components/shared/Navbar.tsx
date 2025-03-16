'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, FC } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only handle clicks outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar fixed top-2 left-0 w-full z-10 px-2 sm:px-4 lg:px-16 xl:px-24 h-16 sm:h-20 lg:h-24  bg-transparent`}>
      <div className="flex justify-between items-center w-full max-w-[1920px] mx-auto">
        {/* Left: Logo section */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Image 
              src="/kulogo.png" 
              width={70} 
              height={70} 
              alt="Khulna University"
              className="w-[35px] h-[45px] sm:w-[45px] sm:h-[55px] md:w-[55px] md:h-[65px] lg:w-[70px] lg:h-[85px] "
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                Khulna
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                University
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation links - visible on desktop */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link href="/career" className="text-base xl:text-lg text-white hover:text-gray-200
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Career
          </Link>
          <Link href="/news" className="text-base xl:text-lg text-white hover:text-gray-200
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            News
          </Link>
          <Link href="/noc-go" className="text-base xl:text-lg text-white hover:text-gray-200
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            NOC/GO
          </Link>
          <Link href="/support" className="text-base xl:text-lg text-white hover:text-gray-200
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Support
          </Link>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center ml-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <Link 
            href="/apply" 
            className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 
              py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 
              border border-white 
              text-xs sm:text-sm md:text-base lg:text-lg
              text-white hover:bg-white hover:text-gray-800 
              transition-all duration-300
              hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
          >
            APPLY →
          </Link>
          
          {/* Menu Button and Dropdown */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center 
                px-2 sm:px-3 md:px-4 lg:px-6 
                py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 
                border border-white 
                bg-[#1e3a5f] text-white 
                text-xs sm:text-sm md:text-base lg:text-lg
                transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2">MENU</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden
                backdrop-blur-lg bg-[#1e3a5f]/90 border border-white/10
                shadow-[0_0_20px_rgba(0,0,0,0.3)]
                transition-all duration-300 transform origin-top-right">
                <div className="py-2">
                  <Link 
                    href="/career" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Career
                  </Link>
                  <Link 
                    href="/news" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    href="/noc-go" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    NOC/GO
                  </Link>
                  <Link 
                    href="/support" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                  
                  {/* Divider */}
                  <div className="my-2 border-t border-white/10"></div>
                  
                  {/* Additional Links */}
                  <Link 
                    href="/contact" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
