import React, { useContext } from 'react';
import { Store } from '../../utils/store';
import Footer_AR from './Footer_AR';
import Footer_EN from './Footer_EN';

export default function Footer() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  if (language === 'EN') {
    //   return <Navbar_EN />;
    return <Footer_EN />;
  }
  if (language === 'AR') {
    return <Footer_AR />;
  }
  return <div></div>;
}
