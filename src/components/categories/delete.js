import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default ({deleteCategory, handleChange, handleClose , handleDelete, category : {initial, name, active}}) => {
    return <Fragment>
        <Dialog
            open={deleteCategory}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Delete Category"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure to delete?
            </DialogContentText>
            <form>
                <TextField label = 'Initial' value = {initial} onChange = {handleChange('initial')}  margin = 'normal'/>
                <br/>
                <TextField label = 'Name' value = {name} onChange = {handleChange('name')} margin = 'normal'/>
                &nbsp;
                <TextField label = 'Active' value = {active} onChange = {handleChange('active')} margin = 'normal'/>
                <br/>
      
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