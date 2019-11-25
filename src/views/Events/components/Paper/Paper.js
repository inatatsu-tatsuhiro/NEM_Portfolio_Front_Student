import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    }
}));

const Paper = props => {
    const { events } = props;


    return (
        <Paper>

        </Paper>
    );
};


export default Paper;
