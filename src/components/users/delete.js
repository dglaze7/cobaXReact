import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default ({deleteUser, handleToggle, handleClose , handleChangeCheckBox, handleDelete, user : {userName, first, mid, last, email, phone, active}}) => {
    return <Fragment>
        <Dialog
            open={deleteUser}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure to delete?
            </DialogContentText>
            <form>
                <TextField label = 'User Name' value = {userName}  margin = 'normal' disabled = {true}/>
                &nbsp;
                <TextField label = 'First Name' value = {first}  margin = 'normal'  disabled = {true}/>
                <br/>
                <TextField label = 'Mid Name' value = {mid} margin = 'normal' disabled = {true}/>
                &nbsp;
                <TextField label = 'Last Name' value = {last}  margin = 'normal' disabled = {true}/>
                <br/>
                <TextField label = 'Email' value = {email}  margin = 'normal' disabled = {true}/>
                &nbsp;
                <TextField label = 'Phone' value = {phone}  margin = 'normal' disabled = {true}/>
                <br/>
                <FormControlLabel
                        control={
                            <Switch
                                checked={active}
                                onChange={handleChangeCheckBox('active')}
                                value="active"
                                color="primary"
                            />
                        }
                        label="Active"
                        disabled = {true}/>
                &nbsp;
            </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    Delete
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}