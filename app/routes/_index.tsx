import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "關於我" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function About() {

  const allData = useLoaderData<typeof loader>();
  const appUrl = allData.appUrl;
  
  //return <pre>{JSON.stringify(allData, null, 2)}</pre>;
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>👋 歡迎來到我的 Remix 網站</h1>
      <p>這是一個用 Remix 建立的基本首頁。</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🔗其他頁面</h2>
        <ul>
          <li>
            <Link to="/about">關於我們</Link>
          </li>
          <li>
            <Link to="/contact">聯絡我們</Link>
          </li>
        </ul>
      </section>

      <footer style={{ marginTop: "4rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
        <p>&copy; 2025 我的網站版權所有。</p>
      </footer>
    </main>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const menuUrl = new URL('/api/menu', process.env.VITE_API_URL)
  const menuRes = await fetch(menuUrl);
  const menu = await menuRes.json();
  return json({
    menu: menu,
    appUrl: process.env.VITE_APP_URL,
  });
}

