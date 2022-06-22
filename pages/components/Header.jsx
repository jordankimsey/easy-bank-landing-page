import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import menuIcon from '../../public/images/icon-hamburger.svg';
import closeIcon from '../../public/images/icon-close.svg';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import RequestButton from './RequestButton';
import { Container } from '@mui/system';
import { ButtonGroup } from '@mui/material';

const drawerWidth = 220;
const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle}>
        <Container
          sx={{
            pt: 2,
            pb: 2,
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button>
            <Image src={closeIcon} />
          </Button>
        </Container>
        <Divider />

        <List sx={{ textAlign: 'center' }}>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ backgroundColor: 'neutral.contrastText' }}>
      <AppBar
        component='nav'
        position='fixed'
        sx={{
          backgroundColor: 'neutral.contrastText',
          dispaly: 'flex',
          justifyContent: 'center',
          alignItems: 'space-evenly',
        }}
      >
        <Container maxWidth='xl'>
        <Toolbar sx={{ backgroundColor: 'neutral.contrastText' }}>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            <Image src={logo} width={150} height={20} />
          </Typography>

          <Box
            sx={{
              flexWrap: 'nowrap',
              display: { xs: 'none', sm: 'block' },
              flexGrow: 1,
              height: '100%',
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: 'neutral.main',
                  '&:hover': {
                    borderBottom: 4,
                    borderColor: 'primary.light',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <ButtonGroup sx={{ display: { xs: 'none', sm: 'block' } }}>
            <RequestButton />
          </ButtonGroup>

          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Image src={menuIcon} />
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          anchor='right'
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
