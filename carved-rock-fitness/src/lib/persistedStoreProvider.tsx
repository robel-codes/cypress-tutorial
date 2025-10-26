'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactNode } from 'react';
import { persistor, store } from './store';

export function PersistedStoreProvider({ children }: { children: ReactNode }) {

  // Expose the store to Cypress tests
  if (typeof window !== 'undefined' && window.Cypress) {
    window.store = store;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}