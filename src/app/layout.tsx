import { ReactNode } from 'react';
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

type Props = {
  children: ReactNode;
};

// Create a client-side wrapper component since AuthProvider uses hooks
const ClientLayout = ({ children, messages }: { children: ReactNode; messages: any }) => {
  return (
    <NextIntlClientProvider messages={messages}>
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <main className="flex-1 container mx-auto">{children}</main>
    </NextIntlClientProvider>
  );
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Pak Financials</title>
      </head>
      <body className={`flex flex-col bg-slate-100`}>
        <ClientLayout messages={messages}>{children}</ClientLayout>
      </body>
    </html>
  );
}