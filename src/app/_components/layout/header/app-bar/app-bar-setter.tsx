'use client';

import { ReactNode, useEffect } from 'react';

import { useAppBarStore } from './use-app-bar-store';

interface AppBarSetterProps {
  title: string;
  hasBackURL?: boolean;
  hasBackground?: boolean;
  action?: ReactNode;
}

export default function AppBarSetter({
  title,
  hasBackground = true,
  hasBackURL = true,
  action,
}: AppBarSetterProps) {
  const { setAppBar } = useAppBarStore();

  useEffect(() => {
    setAppBar({
      title,
      hasBackground,
      hasBackURL,
      action,
      hasAppBar: true,
    });

    return () => {
      setAppBar({
        hasAppBar: false,
        title: '',
        hasBackground: true,
        hasBackURL: true,
        action: null,
      });
    };
  }, [setAppBar, title, hasBackground, action, hasBackURL]);

  return null;
}
