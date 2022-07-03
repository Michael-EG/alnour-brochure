import React, { useContext } from 'react'
import Layout from '../components/Layout';
import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function technicalSupport() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  return (
    <Layout>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <TechnicalSupport_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <TechnicalSupport_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
