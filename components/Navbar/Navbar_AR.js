import {
  AppBar,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React, { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import PopupMenu_AR from '../PopupMenu/PopupMenu_AR';
import {
  officeEquipmentTextAR,
  officeSuppliesTextAR,
  printAndCopyMenu1AR,
  printAndCopyMenu1Key,
  printAndCopyMenu2AR,
  printAndCopyMenu2Key,
  printAndCopyMenu3AR,
  printAndCopyMenu3Key,
  printAndCopyMenu4AR,
  printAndCopyMenu4Key,
  printAndCopyMenu5AR,
  printAndCopyMenu5Key,
  printAndCopyMenu6AR,
  printAndCopyMenu6Key,
  printAndCopyMenu7AR,
  printAndCopyMenu7Key,
  printAndCopyTextAR,
  servicesMenu1AR,
  servicesMenu1Key,
  servicesMenu2AR,
  servicesMenu2Key,
  servicesMenu3AR,
  servicesMenu3Key,
  servicesMenu4AR,
  servicesMenu4Key,
  servicesMenu5AR,
  servicesMenu5Key,
  servicesMenu6AR,
  servicesMenu6Key,
  servicesMenu7AR,
  servicesMenu7Key,
  servicesMenu8AR,
  servicesMenu8Key,
  servicesMenu9AR,
  servicesMenu9Key,
  servicesTextAR,
  softwareSolutionsMenu1AR,
  softwareSolutionsMenu1Key,
  softwareSolutionsMenu2AR,
  softwareSolutionsMenu2Key,
  softwareSolutionsMenu3AR,
  softwareSolutionsMenu3Key,
  softwareSolutionsTextAR,
} from './Navbar_text';
import NavigationDrawer_AR from '../NavigationDrawer/NavigationDrawer_AR';

export default function Navbar_AR() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [largeView, setLargeView] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // setAnchorRef(null)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const handleResize = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 960) {
      setLargeView(false);
    } else {
      setLargeView(true);
    }
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(!drawerState);
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <AppBar position="static" className={classes.navbar}>
      {/* <Toolbar> */}
      {/* main navbar row */}
      <div
        className={largeView ? 'navbar-mainDiv-ar' : 'navbar-mainDiv-mobile-ar'}
      >
        {/* navbar area */}
        <div
          className={
            largeView
              ? 'navbar-navigation-area-ar'
              : 'navbar-navigation-area-mobile-ar'
          }
        >
          {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={servicesTextAR}
                popperPlacement="bottom-start"
                menuItems={[
                  {
                    key: servicesMenu1Key,
                    text: servicesMenu1AR,
                  },
                  {
                    key: servicesMenu2Key,
                    text: servicesMenu2AR,
                  },
                  {
                    key: servicesMenu3Key,
                    text: servicesMenu3AR,
                  },
                  {
                    key: servicesMenu4Key,
                    text: servicesMenu4AR,
                  },
                  {
                    key: servicesMenu5Key,
                    text: servicesMenu5AR,
                  },
                  {
                    key: servicesMenu6Key,
                    text: servicesMenu6AR,
                  },
                  {
                    key: servicesMenu7Key,
                    text: servicesMenu7AR,
                  },
                  {
                    key: servicesMenu8Key,
                    text: servicesMenu8AR,
                  },
                  {
                    key: servicesMenu9Key,
                    text: servicesMenu9AR,
                  },
                ]}
              />
            </div>
          )}
          {largeView && (
            <div>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {officeSuppliesTextAR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {officeEquipmentTextAR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={softwareSolutionsTextAR}
                popperPlacement="bottom-end"
                menuItems={[
                  {
                    key: softwareSolutionsMenu1Key,
                    text: softwareSolutionsMenu1AR,
                  },
                  {
                    key: softwareSolutionsMenu2Key,
                    text: softwareSolutionsMenu2AR,
                  },
                  {
                    key: softwareSolutionsMenu3Key,
                    text: softwareSolutionsMenu3AR,
                  },
                ]}
              />
            </div>
          )}
          {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={printAndCopyTextAR}
                popperPlacement="bottom-end"
                menuItems={[
                  { key: printAndCopyMenu1Key, text: printAndCopyMenu1AR },
                  { key: printAndCopyMenu2Key, text: printAndCopyMenu2AR },
                  { key: printAndCopyMenu3Key, text: printAndCopyMenu3AR },
                  { key: printAndCopyMenu4Key, text: printAndCopyMenu4AR },
                  { key: printAndCopyMenu5Key, text: printAndCopyMenu5AR },
                  { key: printAndCopyMenu6Key, text: printAndCopyMenu6AR },
                  { key: printAndCopyMenu7Key, text: printAndCopyMenu7AR },
                ]}
              />
            </div>
          )}
          {largeView && (
            <div>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">الرئيسية</Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {!largeView && (
            <div>
              {/* <Button onClick={toggleDrawer(true)}>
                <Icon baseClassName="material-icons-two-tone">
                  <ViewHeadlineIcon />
                </Icon>
              </Button> */}
              <NavigationDrawer_AR />
              {/* <IconButton
                className="small-text"
                onClick={toggleDrawer(true)}
                // color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ViewHeadlineIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={drawerState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <p>hi</p>
              </SwipeableDrawer> */}
            </div>
          )}
        </div>

        {/* spacing area */}
        <div
          className={
            largeView
              ? 'navbar-spacing-area-ar'
              : 'navbar-spacing-area-mobile-ar'
          }
        ></div>
        {/* logo area */}
        <div
          className={
            largeView ? 'navbar-logo-area-ar' : 'navbar-logo-area-mobile-ar'
          }
        >
          {/* <div
            className={
              largeView
                ? 'navbar-logo-upper-text-area-ar'
                : 'navbar-logo-upper-text-area-mobile-ar'
            }
          >
            مؤسسة
          </div> */}
          <div
            className={
              largeView
                ? 'navbar-logo-main-text-area-ar'
                : 'navbar-logo-main-text-area-mobile-ar'
            }
          >
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  className={classes.brand}
                  // style={{ background: 'blue' }}
                >
                  مؤسسة النور
                </Typography>{' '}
                {/* <br /> */}
              </Link>
            </NextLink>
          </div>
          <div
            className={
              largeView
                ? 'navbar-logo-secondary-text-area-ar'
                : 'navbar-logo-secondary-text-area-mobile-ar'
            }
          >
            <Typography className="small-text">التجارية</Typography>
          </div>
        </div>
      </div>
      {/* </Toolbar> */}
    </AppBar>
  );
}
