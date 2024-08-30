import Head from 'next/head';
import Link from 'next/link';

import { defaultLayout } from '@src/components/layouts/default';
import type { NextPageWithLayout } from '@src/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main>
        <Link href="/kitchen-sink">Kitchen Sink</Link>
        <br />
        <Link href="/shop/gifts-for-him/red-wine-and-nibbles-hamper">
          Red Wine and Nibbles Hamper
        </Link>
        <br />
        <Link href="/shop/wine-and-champagne/wine-duo-in-gift-box-from-58-00">
          Wine Duo in Gift Box
        </Link>
        <br />
        <Link href="/shop/gifts-for-him/chocolate-box-hamper/">Chocolate Box Hamper</Link>
        <br />
        <Link href="/shop/gifts-for-him/premium-cheese-wine-hamper/">
          Premium Cheese & Wine Hamper
        </Link>
        <br />
        <Link href="/product/polo">Polo</Link>
      </main>
    </>
  );
};

Home.getLayout = defaultLayout;

export default Home;