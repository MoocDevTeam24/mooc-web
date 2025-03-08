import React from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

const AlterDialog = (props) => {
  const { onClose, data, open, title, alertType } = props;

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
      <Alert severity={alertType ? alertType : "info"}>{title}</Alert>
      {/* <DialogTitle>
       
      </DialogTitle> */}
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

export default AlterDialog;
