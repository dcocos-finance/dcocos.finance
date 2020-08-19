import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import { colors } from '../../theme'


import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';


import Store from "../../stores";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  Link,
  IconButton,
  Divider,
  Drawer
} from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';

const store = Store.store

const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 0,
    width: '100%',
    paddingBottom: '20px'
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  
  // appbar: {
  //   boxShadow: "none",
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  buttons: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  footer: {
    padding: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    }
  },
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerText: {
    cursor: 'pointer',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  languageContainer: {
    paddingLeft: '12px',
    display: 'none'
  },
  selectInput: {
    fontSize: '14px',
    color: colors.pink
  },

  titleColor:{
    color:colors.white
  },
  
  link: {
    textDecoration: 'none'
  }
});

class Footer extends Component {


  constructor(props) {
    super()

    const rewardPools = store.getStore('rewardPools')

    // const theme = useTheme();

    this.state = {
      rewardPools: rewardPools,
      languages: store.getStore('languages'),
      language: this.switchLanguage(),
      open: false,
      anchorEl: null,
    }
  }



  switchLanguage = () => {
    switch(i18n.language) {
      case 'zh':
      case 'zh-CN':
        return '中文'
      case 'en':
        return 'English'
      default:
        return 'English'
    }
  }

  closeAlert = () => {
    this.setState({open: false})
  }

  setAnchorEl = anchorEl => [
    this.setState({ anchorEl })
  ]

  handleClick = (event) => {
    this.setAnchorEl(event.currentTarget);
  };



  handleClose = (language) => {
    let self = this
    i18n.changeLanguage(language).then(() => {
      self.setState({ language: self.switchLanguage(language)})
      self.setAnchorEl(null)
    })
  };



  handleDrawerOpen = () => {
    
    this.setState({ open: true});
  };

  handleDrawerClose = () => {
    this.setState({ open: false});
  };



  render() {
    const { classes, t, location } = this.props;
    const { open, anchorEl, language } = this.state

    return (

      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
          <Link href="/"  className={classes.titleColor}  ><HomeIcon color="white" /></Link>
          </Typography>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}  className={classes.titleColor} >{language}</Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose.bind(this, 'zh')}>中文</MenuItem>
              <MenuItem onClick={this.handleClose.bind(this, 'en')}>English</MenuItem>
            </Menu>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.handleDrawerOpen.bind(this)}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
  
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat

        </Typography> */}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose.bind(this)}>
             <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key='GitHub'>
            <ListItemIcon> <GitHubIcon /></ListItemIcon>
            <ListItemText><Link href="https://github.com/dcocos-finance" target="_blank">GitHub</Link> </ListItemText>
          </ListItem>
          <ListItem button key='Audit'>
            <ListItemIcon> <VerifiedUserIcon /></ListItemIcon>
            <ListItemText><Link href="https://github.com/dcocos-finance/audit" target="_blank">Audit</Link> </ListItemText>
          </ListItem>
          <ListItem button key='FAQ'>
            <ListItemIcon> <HelpIcon /></ListItemIcon>
            <ListItemText><Link href="https://github.com/dcocos-finance/doc/blob/master/faq" target="_blank">FAQ</Link> </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key='Twitter'>
            <ListItemIcon> <TwitterIcon /></ListItemIcon>
            <ListItemText><Link href="https://twitter.com/CocosBCX" target="_blank">Twitter</Link> </ListItemText>
          </ListItem>
          <ListItem button key='Telegram'>
            <ListItemIcon> <TelegramIcon /></ListItemIcon>
            <ListItemText><Link href="https://t.me/cocosbcxen" target="_blank">Telegram</Link> </ListItemText>
          </ListItem>
          <ListItem button key='Discord'>
            <ListItemIcon> <RedditIcon /></ListItemIcon>
            <ListItemText><Link href="https://discord.gg/jdJMNtC" target="_blank">Discord</Link> </ListItemText>
          </ListItem>                        
        </List>
      </Drawer>
    </div>
  );

  
  
    // return (
    // <div className={classes.root}>
    //   <div className={classes.alert}>
    //     <Collapse in={open}>
    //       <Alert variant="filled" severity="warning" action={<IconButton aria-label="close" color="inherit" size="small" onClick={this.closeAlert}><CloseIcon fontSize="inherit" /></IconButton>}>
    //         {t('Footer.Slogan')}
    //       </Alert>
    //     </Collapse>
    //   </div>
    //   <AppBar position="static" color="transparent" className={classes.appbar}>
    //     <Toolbar>
    //       <Typography variant="h6" className={classes.title}>
    //         <Link href="/">{t('Footer.Home')}</Link>
    //       </Typography>
    //       <div className={classes.buttons}>
    //         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>{language}</Button>
    //         <Menu
    //           id="simple-menu"
    //           anchorEl={anchorEl}
    //           keepMounted
    //           open={Boolean(anchorEl)}
    //           onClose={this.handleClose}
    //         >
    //           <MenuItem onClick={this.handleClose.bind(this, 'zh')}>中文</MenuItem>
    //           <MenuItem onClick={this.handleClose.bind(this, 'en')}>English</MenuItem>
    //         </Menu>
    //         <Link href="https://discord.gg/XQ4wnmz" target="_blank">Github</Link>
    //         <Link href="https://discord.gg/XQ4wnmz" target="_blank">{t('Footer.Audit')}</Link>
    //         <Link href="https://discord.gg/XQ4wnmz" target="_blank">FAQ</Link>
    //         {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handlClick}>
    //           {t('Footer.Community')}
    //         </Button>
    //         <Menu
    //           id="simple-menu"
    //           anchorEl={anchorEl}
    //           keepMounted
    //           open={Boolean(anchorEl)}
    //           onClose={this.handleCloseCommunity}
    //         >
    //           <MenuItem onClick={this.handleCloseCommunity.bind(this)}>
    //             <Link href="https://twitter.com/FinanceYfii" target="_blank">Twitter</Link>
    //           </MenuItem>
    //           <MenuItem onClick={this.handleCloseCommunity.bind(this)}>My account</MenuItem>
    //           <MenuItem onClick={this.handleCloseCommunity.bind(this)}>Logout</MenuItem>
    //         </Menu> */}

    //         <Link href="https://twitter.com/FinanceYfii" target="_blank">Twitter</Link>
    //         <Link href="https://t.me/yfiifinance" target="_blank">Telegram</Link>
    //         <Link href="https://discord.gg/XQ4wnmz" target="_blank">Discord</Link>
    //       </div>
    //   </Toolbar>
    //   </AppBar>
    // </div>
    // )
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Footer)));
