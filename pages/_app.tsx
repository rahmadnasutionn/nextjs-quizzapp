import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'

import NProgress from 'nprogress'

export default function App({ Component, pageProps }: AppProps) {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    })

    Router.events.on('routeChangeComplete', () => {
      NProgress.done(false)
    });
  
  return (
  <AuthContextProvider>
    <Component {...pageProps} />
   </AuthContextProvider>
  );
};
