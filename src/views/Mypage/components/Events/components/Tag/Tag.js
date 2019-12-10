import React from 'react'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    tag: {
        margin: theme.spacing(1),
        fontSize: 10
    }
}))

const Tag = (props) => {
    const tags = props.tag.split(",")
    const classes = useStyles()
    return (
        <React.Fragment>
            {tags.map((e, i) => {
                return (
                    <Chip size="small" label={e} className={classes.tag} key={i} />
                )
            })}
        </React.Fragment>
    )
}


export default Tag