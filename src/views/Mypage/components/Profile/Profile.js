import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import default_img from './default_icon.png'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    student_info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}))

const Profile = (props) => {
    const {name, student_id, belonging} = props
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <img src={default_img} alt="profile" />
            <div className={classes.student_info}>
                <Typography noWrap variant="h6">{name}</Typography>
                <Typography noWrap variant="h6">{student_id}</Typography>
                <Typography noWrap variant="h6">{belonging}</Typography>
            </div>
        </div>
    )
}


export default Profile