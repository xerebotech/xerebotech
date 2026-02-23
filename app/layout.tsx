import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xerebo — UAE's First Marketing Growth Intelligence",
  description: "Strategy, execution, and technology — all under one roof. From strategy to execution, we handle the full marketing lifecycle.",
  keywords: ["marketing", "UAE", "growth", "digital marketing", "CRM", "automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Consent Mode v2: must run BEFORE GTM loads */}
        <Script id="gtm-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Check if user already made a consent choice
            var storedConsent = localStorage.getItem('xerebo_cookie_consent');
            var consentValue = storedConsent === 'accepted' ? 'granted' : 'denied';

            // Set consent defaults (denied until user accepts)
            gtag('consent', 'default', {
              'ad_storage': consentValue,
              'ad_user_data': consentValue,
              'ad_personalization': consentValue,
              'analytics_storage': consentValue,
              'wait_for_update': 500
            });

            // Push restored consent to dataLayer for GTM triggers
            if (storedConsent) {
              dataLayer.push({
                event: 'consent_choice',
                consent_status: storedConsent
              });
            }
          `}
        </Script>

        {/* GTM loads AFTER consent defaults are set */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
      </head>
      <body className="font-sans antialiased">
        {/* GTM noscript fallback */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ContactModalProvider>
          {children}
          <ContactModal />
          <ExitIntentPopup />
          <FloatingCTA />
          <CookieBanner />
        </ContactModalProvider>
      </body>
    </html>
  );
}
