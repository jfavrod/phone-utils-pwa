import React from 'react';

import { Paper, TextField } from '@material-ui/core';

import { IListPropsData } from './interfaces';

const List = (props: IListPropsData) => {
  const { id, title } = props.data;

  return (<>
    <Paper
      style={{ width: '100%' }}
    >
      <TextField id={`${id}-title`} label="Title" value={title} />
    </Paper>
  </>)
};

export default List;
