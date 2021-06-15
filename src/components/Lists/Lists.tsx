import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import ListsService from '../../services/Lists/ListsService';
import { IListProps, IListsProps } from './interfaces';

import List from './List';
import Listette from './Listette';
import MenuItem from '../MainMenu/MenuItem';

const Lists = (props: IListsProps) => {
  const { navigate } = props;

  const [ data, setData ] = useState<IListProps[]>([]);
  const [ selectedList, setSelectedList ] = useState<IListProps | null>(null);

  const getListetts = () => data.map((listData) => (
    <Listette data={listData} onClick={(list) => {
      navigate(`/lists/${list}`)
      setSelectedList(list);
    }} />
  ));

  useEffect(() => {
    const listSvc = new ListsService();
    listSvc.getAll().then((data) => {
      setData(data);
    });
  }, []);

  return (<>
    <Grid container spacing={1}>
      <MenuItem
        path="/"
        onClick={() => navigate('/')}
        value="Main Menu"
      />

      { selectedList ? 
        <List data={selectedList} />
        :
        getListetts()
      }
    </Grid>
  </>);
};

export default Lists;
