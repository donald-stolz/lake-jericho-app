import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';



class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (event) => {
		this.props.handleChange(event.target)
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button color={'secondary'} onClick={this.handleClickOpen}>Remove Client</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Remove "}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {"Are you sure you want to remove this client?"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" >
              <span value="false">Cancel</span>
            </Button>
            <Button onClick={this.handleClose} color="primary" >
              <span value="true">Confirm</span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.defaultProps = {
	handleChange: PropTypes.func.isRequired,
}


AlertDialog.propTypes = {
	handleChange: (event) => {console.log(event);},
}

export default AlertDialog;
