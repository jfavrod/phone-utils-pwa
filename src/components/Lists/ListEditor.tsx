import React, {
  useEffect,
  useState,
  useMemo,
  MouseEvent,
  ChangeEvent
} from 'react';

import {
  Button,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import { IListProps } from '../../services/Lists';
import { IListEditorProps } from './interfaces';
import styles from './styles';

const ListEditor = (props: IListEditorProps) => {
  const [ list, setList ] = useState<IListProps>({
    items: [],
    title: '',
  });

  const classes = styles();

  const getItemIndex = (id: string): number => {
    const idx = Number(id.match(/-\d+$/)?.pop()?.replace('-', ''));

    if (!isNaN(idx)) {
      return idx;
    }
    return -1;
  }

  const handleAddItem = () => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    newList.items.push('');
    setList(newList);
  };

  const handleItemValueChange = (event: ChangeEvent) => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    const target = event.target as HTMLInputElement;
    const idx = getItemIndex(target.id);

    newList.items[idx] = target.value;
    setList(newList);
  };

  const handleRemoveItem = (id: string) => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    const idx = getItemIndex(id);
    newList.items.splice(idx, 1);
    setList(newList);
  };

  const handleSaveAction = (event: MouseEvent) => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;

    if (props.saveAction) {
      props.saveAction(newList);
    }

    return;
  };

  const handleTitleChange = (event: ChangeEvent) => {
    const newList = JSON.parse(JSON.stringify(list)) as IListProps;
    newList.title = (event.target as HTMLInputElement).value;
    setList(newList);
  };

  const deleteButton = useMemo(() => (
    <Grid item xs={4}>
      <Button
        color='secondary'
        onClick={() => {
          if (props.deleteAction) {
            props.deleteAction(list.id as string);
          }
        }}
        variant='outlined'
      >
        Delete
      </Button>
    </Grid>
  ), [ list, props ]);

  useEffect(() => {
    if (props.data) setList(
      JSON.parse(JSON.stringify(props.data)),
    );
  }, [props]);

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <form>
          <TextField
            id={`${list.id}-title`}
            label="Title"
            onChange={handleTitleChange}
            value={list.title}
          />

          <p>Items</p>
          { 
            list.items.map((item, i) => (
              <Grid key={`item-${i}`} container>
                <Grid item xs={10}>
                  <TextField
                    id={`item-${i}`}
                    onChange={handleItemValueChange}
                    value={item}
                  />
                </Grid>

                <Grid item xs={1}>
                  <Button
                    onClick={() => handleRemoveItem(`item-${i}`)}
                  >
                    <DeleteIcon fontSize="small" />
                  </Button>
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
            { !list.id ? <Grid item xs={2} /> : deleteButton }

            <Grid item xs={4}>
              <Button
                color='primary'
                onClick={handleSaveAction}
                variant='outlined'
              >
                Save
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button
                color='default'
                onClick={() => {
                  if (props.cancelAction) {
                    props.cancelAction();
                  }
                }}
                variant='outlined'
              >
                { !list.id ? 'Cancel' : 'Close' }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default ListEditor;
