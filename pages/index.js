import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
// import { useContext } from 'react';
// import { Store } from '../utils/store';

export default function Home() {
  //   const { state, dispatch } = useContext(Store);
  return (
    <Layout>
      <div>Main Page</div>
    </Layout>
  );
}
