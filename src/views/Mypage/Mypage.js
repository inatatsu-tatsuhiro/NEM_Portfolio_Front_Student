import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Mypage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Mypage
        </div>
    );
};

export default Mypage;
