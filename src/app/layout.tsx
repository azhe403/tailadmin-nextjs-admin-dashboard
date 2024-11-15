'use client';
import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/css/satoshi.css';
import '@/css/style.css';
import React, { Suspense, useEffect, useState } from 'react';
import Loader from '@/components/common/Loader';
import ReduxProvider from '@/state/ReduxProvider';
import TelegramLogin from '@/components/Telegram/TelegramLogin';
import SessionListener from '@/components/Telegram/SessionListener';

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
    <ReduxProvider>
      <Suspense>
        <TelegramLogin />
        <SessionListener />
      </Suspense>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {loading ? <Loader /> : children}
      </div>
    </ReduxProvider>
    </body>
    </html>
  );
}
