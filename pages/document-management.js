import React, { useContext } from 'react'
import Layout from '../components/Layout';
import DocumentManagement_AR from '../pages_layout/DocumentManagement/DocumentManagement_AR';
import DocumentManagement_EN from '../pages_layout/DocumentManagement/DocumentManagement_EN';
// import InfoPrintCopy_AR from '../pages_layout/InfoPrintCopy/InfoPrintCopy_AR';
// import InfoPrintCopy_EN from '../pages_layout/InfoPrintCopy/InfoPrintCopy_EN';
// import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
// import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function documentManagement() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  return (
    <Layout>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <DocumentManagement_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <DocumentManagement_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
