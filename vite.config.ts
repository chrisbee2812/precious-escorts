import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import prerenderStatic from 'vite-plugin-prerender-static';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const routes = [
  { 
    path: '/', 
    tags: { 
      title: 'Precious Escorts Leeds | Elite Companions in West Yorkshire',
      description: 'Discreet, seductive companionship in Leeds and across West Yorkshire. Real chemistry, total privacy, and unforgettable evenings. Book your perfect escape.',
    }
  },
  { 
    path: '/about', 
    tags: { 
      title: 'About Us | Precious Escorts Leeds – Nearly 15 Years of Discretion and Genuine Connection',
      description: "Learn why Precious Escorts Leeds is the North's best-kept secret. Real chemistry, total confidentiality, and bespoke encounters. Read our story.",
    }
  },
  {
    path: '/gallery',
    tags: {
      title: 'Gallery | Precious Escorts Leeds',
      description: 'Browse our handpicked gallery of stunning companions in Leeds. Every lady is chosen for her charm, beauty, and seductive energy. Discreet, real, and available.',
    }
  },
  {
    path:'/rates',
    tags: {
      title: 'Rates | Precious Escorts Leeds – Transparent & Fair Pricing for Unforgettable Companionship',
      description: 'Clear, honest rates for elite companionship in Leeds. No hidden fees, no surprises. View our pricing and book your perfect evening today.',
    }
  },
  {
    path: '/contact',
    tags: {
      title: 'Contact Precious Escorts Leeds | Discreet Bookings & Enquiries',
      description: "Get in touch with Precious Escorts Leeds. Friendly, private, and no judgment. Whether a booking or a question – we're here to help.",
    }
  },
  {
    path: '/work-with-us',
    tags: {
      title: 'Join Us | Precious Escorts Leeds – Become a Companion',
      description: "Thinking of joining Precious Escorts Leeds? We offer discretion, great rates, and full support. Apply today to become part of Leeds's most respected agency.",
    }
  },
  {
    path: '/faq',
    tags: {
      title: 'FAQ | Precious Escorts Leeds – Your Questions Answered',
      description: "Have questions about Precious Escorts Leeds? Our FAQ covers everything from booking and rates to privacy and companionship. Get the answers you need.",
    }
  },
  {
    path: '/privacy-policy',
    tags: {
      title: 'Privacy Policy | Precious Escorts Leeds',
      description: 'Understand how Precious Escorts Leeds handles your personal information. We are committed to maintaining the highest standards of privacy and data protection.',
    }
  },
  {
    path: '/terms-and-conditions',
    tags: {
      title: 'Terms & Conditions | Precious Escorts Leeds',
      description: 'Our legal terms for using Precious Escorts Leeds services. Read about privacy, payments, cancellations, and your responsibilities before booking.',
    }
  },
  {
    path: '/disclaimer',
    tags: {
      title: 'Disclaimer | Precious Escorts Leeds',
      description: 'Important legal disclaimer for Precious Escorts Leeds. By using this site, you confirm you are over 18 and understand our terms of service.',
    }
  },
  {
    path: '/etiquette',
    tags: {
      title: 'Etiquette | Precious Escorts Leeds – A Guide to Respectful Encounters',
      description: 'How to get the most from your time with us. Respect, hygiene, and boundaries – read our simple etiquette guide for a seamless, seductive experience.',
    }
  }
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      prerenderStatic({
        routes: routes,
        template: 'template.html',
        render: (route: { path: string }) => { // ✅ The plugin needs a render function
          // This will be replaced by your server entry logic
          return `<div id="root">${route.path}</div>`;
        },
        // ✅ NO headTags() function here!
      } as any),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
