import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link as RouteLink} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '550px',
        width: '100%',
        margin: '0 auto'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    tabPanel: {
        width: '100%'
    }
}));


export default function SignIn({ signIn, forgotPassword }) {
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetValue, setResetValue] = useState('');


    const changeEmail = e => {
        setEmail(e.target.value);
    };

    const changePassword = e => {
        setPassword(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        signIn({ email, password });
    };

    const forgoutPassword = ({target}) => {
        setResetValue(target.value);
    };

    const sendEmailResetPasswort = e => {
        e.preventDefault();
        forgotPassword(resetValue);
    };

    const setTabActive = value => () => setTab(value);

    return (
        <Container component="main" >

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon fontSize="large" />
                </Avatar>
                <TabPanel className={classes.tabPanel} value={tab} index={0}>
                    <Typography align="center" component="h1" variant="h5">Панель Администратора</Typography>
                    <form onSubmit={submitForm} className={classes.form} autoComplete="true">
                        <TextField
                            value={email}
                            onChange={changeEmail}
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth={true}
                            label="Email"
                            autoComplete="email"
                        />
                        <TextField
                            value={password}
                            onChange={changePassword}
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth={true}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Войти
                        </Button>
                    </form>
                    <Grid container={true}>
                        <Grid item={true} xs={true}>
                            <RouteLink to="/">
                                <Link component="button" variant="body2">← Назад к сайту</Link>
                            </RouteLink>
                        </Grid>
                        <Grid onClick={setTabActive(1)} item={true}>
                            <Link component="button" variant="body2">Забыли пароль?</Link>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={tab} index={1}>

                    <Typography align="center" component="h1" variant="h5">Восстановление пароля</Typography>
                    <form onSubmit={sendEmailResetPasswort}>
                        <TextField
                            value={resetValue}
                            onChange={forgoutPassword}
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth={true}
                            label="Email"
                            autoComplete="email"
                        />
                        <Button
                            type="submit"
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Отправить
                        </Button>
                    </form>
                    <Grid onClick={setTabActive(0)} container={true}>
                        <Grid item={true} xs={true}>
                            <Link component="button" variant="body2">← Back</Link>
                        </Grid>
                    </Grid>

                </TabPanel>
            </div>
        </Container>
    );
}

