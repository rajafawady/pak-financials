import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const Footer: FC = () => {
  const t = useTranslations("AppLayout");  
  const navigationLinks: FooterLink[] = [
    { label: t('home'), href: '/' },
    { label: t('stockMarket'), href: '/stock-market' },
    { label: t('halalInvestments'), href: '/halal-investments' },
    { label: t('tutorials'), href: '/tutorials' },
    { label: t('aboutUs'), href: '/about' },
    { label: t('contactUs'), href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/pakfinancials',
      label: t('socialMedia.instagram')
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://facebook.com/pakfinancials',
      label: t('socialMedia.facebook')
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/pakfinancials',
      label: t('socialMedia.twitter')
    },
  ];

  return (
    <footer className="bg-indigo-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
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
              className="bg-white p-3 rounded-full text-indigo-800 hover:bg-gray-100 transition-colors duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;