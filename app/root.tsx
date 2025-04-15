import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import GTM from './components/gtm';

// import "./tailwind.css";
import "./styles/globals.scss";

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  }, 
];


export function Layout({ children }: { children: React.ReactNode }) {
  const gtmId = import.meta.env.VITE_GTM_ID;
  const appUrl = import.meta.env.VITE_APP_URL;
  
  return (
    <html lang="zh-Hant-TW">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />              
        <Meta />
        <Links />
      </head>
      <body>
        <GTM />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
