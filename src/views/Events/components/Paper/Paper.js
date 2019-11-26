import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card } from './components'
import { Paper as MPaper } from '@material-ui/core';
import { Link } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        margin: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            width: '80vw'
        },
        [theme.breakpoints.up('lg')]: {
            width: '25vw'
        },
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
            [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
    }
}));

const Paper = props => {
    const { events } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                {events.map((event, i) => {
                    return (
                        <Link to={`/event/${i + 1}`} key={`link${i}`}>
                            <MPaper className={classes.paper} key={`paper${i}`}>
                                <Card event={event} key={`card${i}`} />
                            </MPaper>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};


export default Paper;
