import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=414,user-scalable=no,viewport-fit=cover" />
        <link rel='shortcut icon' href='/images/favicon.ico' type='image/ico'/>
        <link rel="stylesheet" type="text/css" href="../style/global.css" />
        <link rel="stylesheet" type="text/css" href="../style/coupon.css" />
        <title>活动Demo</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
