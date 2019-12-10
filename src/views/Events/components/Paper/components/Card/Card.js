import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Tag } from './components'


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1)
    },
    wrapper: {
        display: 'flex'
    },
    time: {
        color: '#9e9e9e'
    }
}));

const Card = props => {
    const { event } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.info}>
                    <Typography variant="h5" component="h3">
                        {event.name}
                    </Typography>
                    {event.tag.match(',') ? <OneTagPattern event={event} /> : <TagsPattern event={event} />}
                    <Typography variant="h6" component="h3" className={classes.mozaic}>
                        参加モザイク: {event.get_mozaic}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

const TagsPattern = (props) => {
    const { event } = props;
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Typography variant="h6" component="h3" className={classes.time}>
                {event.time} ~
                        </Typography>
            <Tag tag={event.tag} />
        </div>
    )
}
const OneTagPattern = (props) => {
    const { event } = props;
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6" component="h3" className={classes.time}>
                {event.time} ~
                        </Typography>
            <Tag tag={event.tag} />
        </div>
    )
}

export default Card;
