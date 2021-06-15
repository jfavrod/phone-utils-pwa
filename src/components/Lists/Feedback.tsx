import React from 'react';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

import { IFeedbackProps } from './interfaces';

const Feedback = (props: IFeedbackProps) => {
  const { mesg, open, severity, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={ severity === 'success' ? 2000 : null }
      onClose={onClose}
      open={open}
    >
      <Alert onClose={onClose} severity={severity}>
        <p>{ mesg || '' }</p>
      </Alert>
    </Snackbar>
  )
}

export default Feedback;
