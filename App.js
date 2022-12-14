import React from 'react';

import { AuthContext, AuthProvider } from './context/AuthContext';

import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
     <AppNav/>
    </AuthProvider>
  );
}

