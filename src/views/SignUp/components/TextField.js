import React from 'react'
import { TextField as TF } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}))

const TextField = props => {
    const classes = useStyles()
    const { textfields } = props
    console.log(textfields)

    return (
        <div>
            {textfields.map((e, i) => {
                console.log(e)
                return (
                    <TF
                        id={e.id}
                        label={e.label}
                        className={classes.textField}
                        margin={e.margin}
                        key={i}
                        type={e.type !== "none" ? e.type : ""}
                        autoComplete={e.autoComplete !== "none" ? e.autoComplete : ""}
                    />
                )
            })}
        </div>
    )
}

export default TextField;
