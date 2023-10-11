import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
   <Layout style={{ margin: 0}}>
      <Component {...pageProps} />
    </Layout> 
  );
}
