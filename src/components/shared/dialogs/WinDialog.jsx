import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const WinDialog = (props) => {
  const { onClose, data, open, title } = props;

  const handleCancle = () => {
    const paramdata = {
      isOk: false,
      data: data,
    };
    onClose(paramdata);
  };

  const handleClose = () => {
    const paramdata = {
      isOk: false,
      data: data,
    };
    onClose(paramdata);
  };

  const handleOk = () => {
    const paramdata = {
      isOk: true,
      data: data,
    };
    onClose(paramdata);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button
          color="success"
          variant="contained"
          type="submit"
          onClick={handleOk}
        >
          Ok
        </Button>
        <Button color="warning" variant="outlined" onClick={handleCancle}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinDialog;
