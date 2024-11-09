'use client';
import { Provider } from 'react-redux';
import React, { useRef } from 'react';
import { AppStore, makeStore } from '@/state/store';
import { initialize } from 'next/client';

export default function ReduxProvider({ children }: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}