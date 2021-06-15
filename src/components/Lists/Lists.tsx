import React, { useEffect, useState } from 'react';

import { Button, Grid, Paper } from '@material-ui/core';

import ListsService from '../../services/Lists/ListsService';
import { IListProps, IListsProps } from './interfaces';

import ListEditor from './ListEditor';
import Listette from './Listette';
import MenuItem from '../MainMenu/MenuItem';

import styles from './styles';

const Lists = (props: IListsProps) => {
  const { navigate } = props;

  const classes = styles();

  const [ data, setData ] = useState<IListProps[]>([]);
  const [ selectedList, setSelectedList ] = useState<IListProps | null>(null);

  const getListetts = () => data.map((listData) => (
    <Listette key={listData.id} data={listData} onClick={(list) => {
      setSelectedList(list);
    }} />
  ));

  const handleAddNewList = () => {
    setSelectedList({
      title: '',
      items: [],
    });
  };

  useEffect(() => {
    const listSvc = new ListsService();
    listSvc.getAll().then((data) => {
      setData(data);
    });
  }, []);

  return (<>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Button disabled={selectedList !== null} onClick={handleAddNewList}>
            Add List
          </Button>
        </Paper>
      </Grid>

      <MenuItem
        path="/"
        onClick={() => navigate('/')}
        value="Main Menu"
        variant='half'
      />

      { selectedList ? 
        <ListEditor
          cancelAction={() => setSelectedList(null)}
          data={selectedList}
        />
        :
        getListetts()
      }
    </Grid>
  </>);
};

export default Lists;
