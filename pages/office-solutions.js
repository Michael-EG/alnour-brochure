// import { Store } from '@mui/icons-material';
// import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/Layout';
// import AnalysisAdvice_AR from '../pages_layout/AnalysisAdvice_AR';
// import AnalysisAdvice_EN from '../pages_layout/AnalysisAdvice_EN';
import OfficeSolutions_AR from '../pages_layout/OfficeSolutions/OfficeSolutions_AR';
import OfficeSolutions_EN from '../pages_layout/OfficeSolutions/OfficeSolutions_EN';
import styles from '../styles/Home.module.css';
import { Store } from '../utils/store';
// import { useContext } from 'react';
// import { Store } from '../utils/store';

export default function OfficeSolutions() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  return (
    <Layout>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <OfficeSolutions_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <OfficeSolutions_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
