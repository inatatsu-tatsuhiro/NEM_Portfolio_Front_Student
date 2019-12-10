import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Events, Profile } from './components'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Mypage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Profile name={json.name} student_id={json.student_id} belonging={json.belonging} />
            
            <Events events={json.history} />
        </div>
    );
};

export default Mypage;



const json = {
    "name": "稲垣達大",
    "student_id": 1810370015,
    "belonging": "理工学部情報学科",
    "join_count": 2,
    "all_mozaic": 33,
    "history": [
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
            "name": "ビジネスマナー講座",
            "time": "2019/05/12",
            "tag": "ビジネス",
            "get_mozaic": 10
        }
    ]
}