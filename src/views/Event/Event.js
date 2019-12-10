import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Tag } from './components'
import default_img from './default_icon.png'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    text: {
        textAlign: 'center'
    },
    wrapper: {
        display: 'flex'
    },
    item: {
        marginRight: theme.spacing(1)
    },
    mozaic: {
        textAlign: 'left',
        color: '#ff8a80'
    },
    coach_info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: '#f9f0fb',
        borderRadius: 5
    }
}));

const Event = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography noWrap variant="h6" className={classes.text}>{json.name}</Typography>
            <div className={classes.wrapper}>
                <Typography noWrap variant="h6" className={classes.item}>{json.time}~</Typography>
                <Tag className={classes.item}tag={json.tag} /> 
            </div>
            <Typography noWrap variant="h6" className={classes.mozaic}>参加モザイク数: {json.join_mozaic}</Typography>
            <div className={classes.wrapper}>
                <img src={default_img} alt="profile" />
                <div className={classes.coach_info}>
                    <Typography noWrap variant="h6">{json.coach.name}</Typography>
                    <Typography noWrap variant="h6">{json.coach.faicebook}</Typography>
                    <Typography noWrap variant="h6">{json.coach.twitter}</Typography>
                </div>
            </div>
            <Typography noWrap variant="h6" className={classes.text}>活動内容</Typography>
            <div className={classes.paper}>
                <Typography variant="body2" gutterBottom>
                    {json.discription}
                </Typography>
            </div>
        </div>
    );
};

export default Event;


const json = {
    "name": "ブロックチェーン",
    "time": "2019/10/08",
    "tag": "IT,ブロックチェーン",
    "join_mozaic": 20,
    "coach": {
        "name":"岡田",
        "faicebook": "facebook id",
        "twitter": "twitter id"
    },
    "discription": "2019年8月2日、Google Nest HubやAndroidなど画面を持つデバイス向けの機能である「Interactive Canvas」が正式リリースとなりました。Interactive Canvasを使ったGoogleアシスタント向けアクションの開発手法を学ぶことができるハンズオンを開催いたします！Interactive CanvasはVue.jsで作った画面を表示することができるので、よりリッチな表現をすることができるようになります。 このハンズオンでは、Dialogflowを使って自然言語処理を行い、バックエンドにAzure Functionsを使います。"
}
