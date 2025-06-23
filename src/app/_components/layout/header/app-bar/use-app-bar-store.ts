import { ReactNode } from 'react';

import { create } from 'zustand';

interface AppBarStore {
  hasAppBar: boolean;
  appBarTitle: string;
  hasBackground: boolean;
  hasBackURL: boolean;
  action: ReactNode | null;
  setAppBar: (options: {
    hasAppBar?: boolean;
    title?: string;
    hasBackground?: boolean;
    hasBackURL?: boolean;
    action?: ReactNode;
  }) => void;
}

export const useAppBarStore = create<AppBarStore>((set) => ({
  hasAppBar: false,
  appBarTitle: '',
  hasBackground: true,
  hasBackURL: true,
  action: null,
  setAppBar: ({ title, ...rest }) =>
    set((state) => ({
      ...state,
      ...rest,
      appBarTitle: title ?? state.appBarTitle,
    })),
}));
