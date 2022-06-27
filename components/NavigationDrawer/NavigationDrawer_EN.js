import React, { useState } from 'react';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Image from 'next/image';
import {
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  ListItem,
  Box,
  //   ThemeProvider,
  Paper,
  Tooltip,
  IconButton,
  SwipeableDrawer,
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import {
  dark_grey,
  medium_blue,
  medium_purple,
  very_light_red,
} from '../../public/colors';
import { lightBlue } from '@material-ui/core/colors';
import {
  officeEquipmentTextEN,
  officeSuppliesTextEN,
  printAndCopyMenu1EN,
  printAndCopyMenu2EN,
  printAndCopyMenu3EN,
  printAndCopyMenu4EN,
  printAndCopyMenu5EN,
  printAndCopyMenu6EN,
  printAndCopyMenu7EN,
  printAndCopyTextEN,
  servicesMenu1EN,
  servicesMenu2EN,
  servicesMenu3EN,
  servicesMenu4EN,
  servicesMenu5EN,
  servicesMenu6EN,
  servicesMenu7EN,
  servicesMenu8EN,
  servicesMenu9EN,
  servicesTextEN,
  softwareSolutionsMenu1EN,
  softwareSolutionsMenu2EN,
  softwareSolutionsMenu3EN,
  softwareSolutionsTextEN,
} from '../Navbar/Navbar_text';

const printAndCopyData = [
  { icon: <People />, label: printAndCopyMenu1EN },
  { icon: <Dns />, label: printAndCopyMenu2EN },
  { icon: <PermMedia />, label: printAndCopyMenu3EN },
  { icon: <Public />, label: printAndCopyMenu4EN },
  { icon: <Public />, label: printAndCopyMenu5EN },
  { icon: <Public />, label: printAndCopyMenu6EN },
  { icon: <Public />, label: printAndCopyMenu7EN },
];
const softwareSolutionsDate = [
  { icon: <People />, label: softwareSolutionsMenu1EN },
  { icon: <Dns />, label: softwareSolutionsMenu2EN },
  { icon: <PermMedia />, label: softwareSolutionsMenu3EN },
  // { icon: <Public />, label: printAndCopyMenu4EN },
  // { icon: <Public />, label: printAndCopyMenu5EN },
  // { icon: <Public />, label: printAndCopyMenu6EN },
  // { icon: <Public />, label: printAndCopyMenu7EN },
];
const servicesData = [
  { icon: <People />, label: servicesMenu1EN },
  { icon: <Dns />, label: servicesMenu2EN },
  { icon: <PermMedia />, label: servicesMenu3EN },
  { icon: <Public />, label: servicesMenu4EN },
  { icon: <Public />, label: servicesMenu5EN },
  { icon: <Public />, label: servicesMenu6EN },
  { icon: <Public />, label: servicesMenu7EN },
  { icon: <PermMedia />, label: servicesMenu8EN },
  { icon: <PermMedia />, label: servicesMenu9EN },
];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function NavigationDrawer_EN() {
  const [open, setOpen] = useState(true);
  const [printAndCopyOpen, setPrintAndCopyOpen] = useState(false);
  const [softwareSolutionsOpen, setSoftwareSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
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
  return (
    <div>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <IconButton
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
        <Box sx={{ display: 'flex' }}>
          <Paper
            elevation={0}
            sx={{ maxWidth: 256 }}
            className="light-background"
          >
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a" href="#customized-list">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/alnour_images%2Flogo_small.png?alt=media&token=b54ce437-b5ef-40a7-b020-c63c7230f6a1"
                  alt="logo -small"
                  width={75}
                  height={75}
                  //   layout="fill"
                />
                {/* <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon> */}
                <div style={{ marginLeft: '15px' }}>
                  <ListItemText
                    sx={{ my: 0 }}
                    color={dark_grey}
                    primary="AL-Nour"
                    secondary="Association"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }}
                  />
                </div>
              </ListItemButton>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary="Home"
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>

              <Divider />

              <Box
                sx={{
                  bgcolor: printAndCopyOpen ? very_light_red : null,
                  pb: printAndCopyOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setPrintAndCopyOpen(!printAndCopyOpen)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: printAndCopyOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <ListItemText
                    // inset
                    primary={printAndCopyTextEN}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary={`${printAndCopyMenu1EN}, ${printAndCopyMenu2EN}, ${printAndCopyMenu3EN}, ${printAndCopyMenu4EN}, ${printAndCopyMenu5EN}, ${printAndCopyMenu6EN}, ${printAndCopyMenu7EN}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: printAndCopyOpen ? 'transparent' : dark_grey,
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: printAndCopyOpen
                        ? 'rotate(-180deg)'
                        : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                </ListItemButton>
                {printAndCopyOpen &&
                  printAndCopyData.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                    >
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
              <Divider />

              <Box
                sx={{
                  bgcolor: softwareSolutionsOpen ? very_light_red : null,
                  pb: softwareSolutionsOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() =>
                    setSoftwareSolutionsOpen(!softwareSolutionsOpen)
                  }
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: softwareSolutionsOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <ListItemText
                    // inset
                    primary={softwareSolutionsTextEN}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary={`${softwareSolutionsMenu1EN}, ${softwareSolutionsMenu2EN}, ${softwareSolutionsMenu3EN}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: softwareSolutionsOpen ? 'transparent' : dark_grey,
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: softwareSolutionsOpen
                        ? 'rotate(-180deg)'
                        : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                </ListItemButton>
                {softwareSolutionsOpen &&
                  softwareSolutionsDate.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                    >
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary={officeEquipmentTextEN}
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary={officeSuppliesTextEN}
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />

              <Box
                sx={{
                  bgcolor: servicesOpen ? very_light_red : null,
                  pb: servicesOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: servicesOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <ListItemText
                    // inset
                    primary={servicesTextEN}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary={`${servicesMenu1EN}, ${servicesMenu2EN}, ${servicesMenu3EN}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: servicesOpen ? 'transparent' : dark_grey,
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: servicesOpen ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                </ListItemButton>
                {servicesOpen &&
                  servicesData.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                    >
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
            </FireNav>
          </Paper>
          {/* </ThemeProvider> */}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
