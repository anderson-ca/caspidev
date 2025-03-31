import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand and description column */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="h-5 w-5 bg-white rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold">Caspimasa</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Book your next great dining experience with us. Find the perfect restaurant for any occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* For Diners column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">For Diners</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Find Restaurants</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Monthly Offers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Reserve for Events</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Gift Cards</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Dining Rewards</Link></li>
            </ul>
          </div>
          
          {/* For Restaurants column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">For Restaurants</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Partner with Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Business Dashboard</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Marketing Tools</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Restaurant Success Stories</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Contact Sales</Link></li>
            </ul>
          </div>
          
          {/* About Us column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Our Story</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Press</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Help & Support</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with legal links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 Caspimasa. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;