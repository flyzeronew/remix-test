import { Link } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node"
import { json, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import Header from '../components/Header'
import Footer from '../components/Footer'
// import styles from '../styles/index.module.scss'

export const meta: MetaFunction = () => {
  return [
    { title: "關於我" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function About() {

  const allData = useLoaderData<typeof loader>();
  const appUrl = allData.appUrl;
  const menu = allData.menu;
  //return <pre>{JSON.stringify(allData, null, 2)}</pre>;
  return (
    <>
      <Header menu={menu} />
      {/* <main className={styles.homePage}>
        <div className='frameBox'>
          <article>
              主欄
          </article>
          <aside>
              右欄
          </aside>
        </div>
      </main> */}
      <Footer />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const menuUrl = new URL('/api/menu', process.env.VITE_APP_URL);
    const menuRes = await fetch(menuUrl);
    if (!menuRes.ok) {
      throw new Error(`Fetch failed with status ${menuRes.status}`);
    }
    const menu = await menuRes.json();
    return json({
      menu,
      appUrl: process.env.VITE_APP_URL,
    });
  } catch (error: any) {
    console.error('Loader error:', error);
    return json(
      {
        error: 'Failed to load menu data',
        message: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

