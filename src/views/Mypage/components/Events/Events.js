import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider } from '@material-ui/core';
import { Tag } from './components'


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
    },
    event: {
    },
    wrapper: {
        display: 'flex'
    },
    time: {
        color: '#9e9e9e',
        margin: theme.spacing(0,1,0,0)
    },
    mozaic: {
        color: '#ff8a80',
    }
}));

const Events = props => {
    const classes = useStyles();
    const { events } = props

    return (
        <div className={classes.root}>
            {events.map(({name, time, tag, get_mozaic},i) => {
                return (
                    <div className={classes.event} key={i}>
                        <Tag tag={tag} />
                        <Typography variant="h5" component="h3">
                            {name}
                        </Typography>
                        <div className={classes.wrapper}>
                            <Typography variant="h6" component="h3" className={classes.time}>
                                {time} ~
                            </Typography>
                            <Typography variant="h6" component="h3" className={classes.mozaic}>
                                参加モザイク: {get_mozaic}
                            </Typography>
                        </div>
                        {i !== events.length-1 && <Divider />}
                    </div>    
                )
            })}
        </div>
    );
};

export default Events;
