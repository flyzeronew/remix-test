import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "關於我" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function About() {
  const appUrl = useLoaderData<typeof loader>().appUrl;
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

export function loader() {
  return json({
      appUrl: process.env.VITE_APP_URL,

  });
}
