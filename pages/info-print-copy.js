import React, { useContext } from 'react'
import Layout from '../components/Layout';
import InfoPrintCopy_AR from '../pages_layout/InfoPrintCopy/InfoPrintCopy_AR';
import InfoPrintCopy_EN from '../pages_layout/InfoPrintCopy/InfoPrintCopy_EN';
// import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
// import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function infoPrintCopy() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  return (
    <Layout>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <InfoPrintCopy_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <InfoPrintCopy_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
