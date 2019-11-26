import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from './components'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))
const Events = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper events={json.events} />
        </div>
    )
}

export default Events;

const json = {
    "events": [
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン,プログラミング,NEM",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン,プログラミング,NEM,デザイン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        },
        {
            "name": "ブロックチェーン",
            "time": "2019/10/08",
            "tag": "IT,ブロックチェーン",
            "get_mozaic": 23
        },
        {
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        }
    ]
}