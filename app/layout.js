"use client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

//Dictionary of Lenguages
import global_es from '../public/traslations/es/global.json'
import global_en from '../public/traslations/en/global.json'

export const metadata = {
  title: 'Explore the world as an International Travel Agent',
  description: 'Become a travel agent and get great prices with Volindo. Discover a new way of traveling and save money on your next adventures.',
  keywords: 'travel, internacional travel, airplane'
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') || 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
})

export default function RootLayout({ children }) {
 return (
    <I18nextProvider i18n={i18next}>
      <body style={{ overflow: 'hidden' }}>
        {children}
      </body>
    </I18nextProvider>
  )
}
