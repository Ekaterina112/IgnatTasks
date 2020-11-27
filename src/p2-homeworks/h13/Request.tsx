import React, {ChangeEvent, useState} from 'react';
import {requestAPI} from './RequestsAPI';
import {Button, Checkbox, createStyles, FormControlLabel, Theme} from '@material-ui/core';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

//from material

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

const Request: React.FC = () => {
    let [message, setMessage] = useState<string>(`just check ${String.fromCodePoint(10084)}  and push the button`)
    const [success, setSuccess] = useState<boolean>(true)
    const onchangeCallbackCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
    const onchangeCallbackButton = () => {
        console.log(success)
        requestAPI.postRequest(success).then(d => setMessage(d.errorText)).catch((error) => {
            setMessage(error.response.data.errorText)
        })
    }
    const classes = useStyles();
    return <div>
            result of response: {message}
            <hr/>
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"  onChange={onchangeCallbackCheckbox} />}
                label="thanks for tasks"
            />
            <Button
                onClick={onchangeCallbackButton}
                variant="contained"
                color="secondary">
                Send request
            </Button>

    </div>
}

export default Request;
