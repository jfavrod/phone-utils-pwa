import React, { useEffect, useState, MouseEvent } from 'react';

import {
  Button,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core';

import { IListEditorProps, IListProps } from './interfaces';
import styles from './styles';

const ListEditor = (props: IListEditorProps) => {
  const [ list, setList ] = useState<IListProps>({
    items: [],
    title: '',
  });

  const classes = styles();

  const handleAddItem = () => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    newList.items.push('');
    setList(newList);
  };

  const handleRemoveItem = (event: MouseEvent) => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    const itemId = (event.target as HTMLElement).id;
    const idx = Number(itemId.match(/-\d+$/)?.pop()?.replace('-', ''));

    if (!isNaN(idx)) {
      newList.items.splice(idx, 1);
      setList(newList);
    }
  };

  const handleSaveAction = (event: MouseEvent) => {
    return;
  }

  useEffect(() => {
    if (props.data) setList(
      JSON.parse(JSON.stringify(props.data)),
    );
  }, [props]);

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <form className={classes.listEditorRoot}>
          {
            list.id ?
            <TextField id={`${list.id}-title`} value={list.title} label="Title" />
            :
            <TextField id={`title`} value={list.title} label="Title" />
          }

          <p>Items</p>
          { 
            list.items.map((item, i) => (
              list.id ?
                <Grid key={`${list.id}-item-${i}`} container>
                  <Grid item xs={11}>
                    <TextField id={`${list.id}-item-${i}`} value={item} />
                  </Grid>

                  <Grid item xs={1}>
                    <TextField
                      onClick={handleRemoveItem}
                      id={`${list.id}-item-${i}`}
                      value="x"
                    />
                  </Grid>
                </Grid>
              :
                <Grid key={`${list.id}-item-${i}`} container>
                  <Grid item xs={11}>
                    <TextField key={`item-${i}`} value={item} />
                  </Grid>

                  <Grid item xs={1}>
                    <TextField
                      id={`${list.id}-item-${i}`}
                      onClick={handleRemoveItem}
                      value="x"
                    />
                  </Grid>
                </Grid>
            ))
          }

          <Button
            color='default'
            onClick={handleAddItem}
            size='small'
          >
            Add Item
          </Button>

          <Grid container>
            <Grid item xs={2} />

            <Grid item xs={5}>
              <Button
                color='primary'
                onClick={handleSaveAction}
                variant='outlined'
              >
                Save
              </Button>
            </Grid>

            <Grid item xs={5}>
              <Button
                color='default'
                onClick={() => {
                  if (props.cancelAction) {
                    props.cancelAction();
                  }
                }}
                variant='outlined'
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default ListEditor;
