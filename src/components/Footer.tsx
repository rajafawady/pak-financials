import { FC } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const Footer: FC = () => {
  const navigationLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Microfinance Apps', href: '/apps' },
    { label: 'Financial Literacy', href: '/literacy' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/pakfinancials',
      label: 'Instagram'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://facebook.com/pakfinancials',
      label: 'Facebook'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/pakfinancials',
      label: 'Twitter'
    },
  ];

  return (
    <footer className="bg-[#4A90E2] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">Pakfinancials</h2>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-col items-center space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="bg-white p-3 rounded-full text-[#4A90E2] hover:bg-gray-100 transition-colors duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© copyright pakfinancials.com 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;