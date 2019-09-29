import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from './home';
import Blog from './blog';
import Media from './media';
import Categories from './categories';
import News from './news';
import { signOut } from '../services/action';
import routes from './routes';

const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
}));

const AdminPages = props => {
    const classes = useStyles();
    const { url } = props.match;


    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap={true}>Панель управления</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {
                        routes.map(route => {
                            return (
                                <ListItem key={route.path} component={AdapterLink} to={`${url}${route.path}`} button={true}>
                                    <ListItemIcon>{route.Icon}</ListItemIcon>
                                    <ListItemText primary={route.text} />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route path={`${url}`} component={Home} exact={true} />
                <Route path={`${url}/blog`} component={Blog} />
                <Route path={`${url}/media`} component={Media} />
                <Route path={`${url}/categories`} component={Categories} />
                <Route path={`${url}/news`} component={News} />
            </main>
        </div>
        // <div className={classes.root}>
        //     <AppBar
        //         position="fixed"
        //         className={clsx(classes.appBar, {
        //             [classes.appBarShift]: open
        //         })}
        //     >
        //         <Toolbar>
        //             <>
        //             <IconButton
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 onClick={handleDrawerOpen}
        //                 edge="start"
        //                 className={clsx(classes.menuButton, {
        //                     [classes.hide]: open
        //                 })}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" noWrap={true}>
        //                 Система управление
        //             </Typography>
        //             </>
        //             <Typography variant="button" noWrap={true}>
        //                 Выйти
        //             </Typography>
        //         </Toolbar>
        //     </AppBar>
        //     <Drawer
        //         className={clsx(classes.drawer, {
        //             [classes.drawerOpen]: open,
        //             [classes.drawerClose]: !open
        //         })}
        //         classes={{
        //             paper: clsx({
        //                 [classes.drawerOpen]: open,
        //                 [classes.drawerClose]: !open
        //             })
        //         }}
        //         open={open}
        //     >
        //         <div className={classes.toolbar}>
        //             <IconButton onClick={handleDrawerClose}>
        //                 <ChevronLeftIcon />
        //             </IconButton>
        //         </div>
        //         <Divider />
        //         <List>
        //             {
        //                 routes.map(route => {
        //                     return (
        //                         <ListItem key={route.path} component={AdapterLink} to={`${url}${route.path}`} button={true}>
        //                             <ListItemIcon>{route.Icon}</ListItemIcon>
        //                             <ListItemText primary={route.text} />
        //                         </ListItem>
        //                     );
        //                 })
        //             }
        //         </List>
        //         <Divider />
        //     </Drawer>
        //     <main className={classes.content}>
        //         <div className={classes.toolbar} />
        //         <Route path={`${url}`} component={Home} exact={true} />
        //         <Route path={`${url}/blog`} component={Blog} />
        //         <Route path={`${url}/media`} component={Media} />
        //         <Route path={`${url}/categories`} component={Categories} />
        //         <Route path={`${url}/news`} component={News} />
        //     </main>
        // </div>
    );
};

const mapDispatchToProps = {
    signOut
};

export default connect(null, mapDispatchToProps)(AdminPages);
