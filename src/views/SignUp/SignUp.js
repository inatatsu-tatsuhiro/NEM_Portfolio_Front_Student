import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import { TextField } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        padding: theme.spacing(4)
    },
    titleContainer: {
        marginTop: theme.spacing(15)
    },
    title: {
        color: '#eea5f6'
    },
    button: {
        marginTop: theme.spacing(5)
    }
}));

const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const SignUp = () => {
    const classes = useStyles();



    const textfields = [
        {
            id: "standard-uncontrolled",
            label: "学籍番号",
            type: "none",
            margin: "normal",
            autoComplete: "current-studentID"
        },
        {
            id: "standard-password-input",
            label: "パスワード",
            type: "password",
            margin: "normal",
            autoComplete: "current-password"
        },
        {
            id: "standard-email-input",
            label: "メールアドレス",
            type: "email",
            margin: "normal",
            autoComplete: "current-email"
        }
    ]

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Typography variant="h3" className={classes.title}> ユーザー登録 </Typography>
            </div>
            <form noValidate autoComplete="off">
                <TextField
                    textfields={textfields}
                />
                <div className={classes.buttonContainer}>
                    <ColorButton variant="contained" color="primary" className={classes.button}>
                        <Link to='/' className="link">登録</Link>
                    </ColorButton>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
