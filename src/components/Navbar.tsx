'use client';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl'; 
import LocaleSwitcher from './LocaleSwitcher';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const t = useTranslations("AppLayout");
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-primary">
          <h1 className="text-2xl font-bold text-blue-500">Pakfinancials</h1>
        </Link>

        {/* Navigation Menu for Large Screens */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {/* Menu Item 1 */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/'
                    className={pathname === '/' ? 'border-b-2 border-slate-900 text-slate-900' : 'text-slate-600 hover:border-b-slate-300 hover:text-slate-900'}
                  >
                    {t('home')} {/* Translated string */}
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
          className="md:hidden text-slate-600 focus:outline-none"
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
                  className={pathname === '/' ? 'border-b-2 border-slate-900 text-slate-900' : 'text-slate-600 hover:border-b-slate-300 hover:text-slate-900'}
                >
                  {t('home')} {/* Translated string */}
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
