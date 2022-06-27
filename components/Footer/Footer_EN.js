import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { careerTextEN } from '../AnouncementBar/AnouncementBar_text';
import {
  officeEquipmentTextEN,
  officeSuppliesTextEN,
  printAndCopyTextEN,
  servicesMenu2EN,
  servicesMenu5EN,
  servicesMenu6EN,
  servicesMenu7EN,
  servicesTextEN,
  softwareSolutionsTextEN,
} from '../Navbar/Navbar_text';

export default function Footer_EN() {
  const current = new Date();
  const [largeView, setLargeView] = useState(false);
  const handleResize = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 960) {
      setLargeView(false);
    } else {
      setLargeView(true);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div>
      <div className={largeView ? 'footer-main-div' : 'footer-main-div-mobile'}>
        <div className={largeView ? 'footer-col1' : 'footer-col1-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Al Nour Association
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Al-Nour Association is your competent partner with individual
            solutions for all areas of office organization. We create
            transparency, implement efficient processes together with you and
            reduce costs. This is what we stand for - together with our strong
            partners.
          </Typography>
        </div>
        <div className={largeView ? 'footer-col2' : 'footer-col2-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Contact
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Al-Nour Association for trade
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            1 Taha Hussein Axis, Al-Nozha Al-Gdida, Cairo, Egypt
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            +20226201250
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            +201022200059
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            info@alnour-assoc.com
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            www.alnour-assoc.com
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Opening Times:
            <br />
            Saturday to Thursday
            <br />
            9:00 AM to 5:00 PM
          </Typography>
          {/* <Typography className="footer-column-body-text">
          Saturday to Thursday
        </Typography>
        <Typography className="footer-column-body-text">
          9:00 AM to 5:00 PM
        </Typography> */}
        </div>
        <div className={largeView ? 'footer-col3' : 'footer-col3-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Important
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Sign up for newsletter
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {printAndCopyTextEN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {softwareSolutionsTextEN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {officeEquipmentTextEN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {officeSuppliesTextEN}
          </Typography>
          {/* <Typography>{servicesTextEN}</Typography> */}
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {careerTextEN}
          </Typography>
        </div>
        <div className={largeView ? 'footer-col4' : 'footer-col4-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Help
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Conditions
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Imprint
          </Typography> */}
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Privacy
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesTextEN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu2EN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu5EN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu6EN}
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu7EN}
          </Typography>
        </div>
        {/* <p>This is footer</p> */}
      </div>
      <div className="footer-copyright-main-div">
        <Typography className="footer-copyright-text">
          © Copyright 2015 - {current.getFullYear()} | by Al-Nour Association |
          All rights reserved
        </Typography>
      </div>
    </div>
  );
}
