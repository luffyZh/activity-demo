import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { RouterTitlePath } from '../constants/ConstTypes';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout title={RouterTitlePath[router.pathname]}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='shortcut icon' href='/images/favicon.ico' type='image/ico'/>
        <title>{RouterTitlePath[router.pathname]}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
