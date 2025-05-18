'use client';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl'; 
import LocaleSwitcher from './LocaleSwitcher';
import { Menu } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const t = useTranslations("AppLayout");

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 bg-indigo-800 text-white">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <h1 className="text-2xl font-bold text-white">{t('title')}</h1>
        </Link>

        {/* Navigation Menu for Large Screens */}
        <div className="hidden md:flex items-center space-x-6 ">
          <NavigationMenu className={t('direction') === 'rtl' ? 'flex-row-reverse' : ''}>
            <NavigationMenuList className="flex space-x-6">
              {/* Menu Item 1 */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/'
              className={pathname === '/' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('home')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Menu Item 2 */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/stock-market'
              className={pathname === '/stock-market' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('stockMarket')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Menu Item 3 */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/halal-investments'
              className={pathname === '/halal-investments' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('halalInvestments')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Menu Item 4 */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/tutorials'
              className={pathname === '/tutorials' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('tutorials')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Menu Item 5 - About Us */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/about'
              className={pathname === '/about' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('aboutUs')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Menu Item 6 - Contact Us */}
              <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href='/contact'
              className={pathname === '/contact' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
            >
              {t('contactUs')} {/* Translated string */}
            </Link>
          </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Locale Switcher on Desktop */}
          <div className="ml-4">
            <LocaleSwitcher />
          </div>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white-600 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md py-4 px-6`}>
        <NavigationMenu>
          <NavigationMenuList className="flex align-items-center w-[100vw] flex-col space-y-4">
            {/* Menu Item 1 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href='/'
                  className={pathname === '/' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
                >
                  {t('home')} {/* Translated string */}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

                {/* Menu Item 2 */}
              <NavigationMenuItem> 
                                            <NavigationMenuLink asChild>
                  <Link
                    href='/stock-market'
                    className={pathname === '/stock-market' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
                  >
                    {t('stockMarket')} {/* Translated string */}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Menu Item 3 */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/halal-investments'
                    className={pathname === '/halal-investments' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
                  >
                    {t('halalInvestments')} {/* Translated string */}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Menu Item 4 */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/tutorials'
                    className={pathname === '/tutorials' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}                  >
                    {t('tutorials')} {/* Translated string */}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Menu Item 5 - About Us */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/about'
                    className={pathname === '/about' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
                  >
                    {t('aboutUs')} {/* Translated string */}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Menu Item 6 - Contact Us */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/contact'
                    className={pathname === '/contact' ? 'border-b-2 border-white-900 text-white-900' : 'text-white-600 hover:border-b-slate-300 hover:text-slate-900'}
                  >
                    {t('contactUs')} {/* Translated string */}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            {/* Locale Switcher on Mobile */}
            <NavigationMenuItem>
              <LocaleSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
