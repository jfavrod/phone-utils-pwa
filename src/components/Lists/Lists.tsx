import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { Button, Grid, Paper } from '@material-ui/core';

import ListsService, { IListProps } from '../../services/Lists';
import { IFeedbackProps, IListsProps } from './interfaces';

import Feedback from './Feedback';
import ListEditor from './ListEditor';
import Listette from './Listette';
import MenuItem from '../MainMenu/MenuItem';

import styles from './styles';

const Lists = (props: IListsProps) => {
  const { navigate } = props;

  const classes = styles();

  const [ queuedList, setQueuedList ] = useState<IListProps | undefined>();

  const [ data, setData ] = useState<IListProps[]>([]);
  const [ showFeedback, setShowFeedback ] = useState(false);

  const [ feedbackData, setFeedbackData ] = useState({
    mesg: 'Something went wrong.',
    severity: 'info' as IFeedbackProps["severity"],
  });

  const saveError = useCallback((message?: string) => {
    const newFeedback = JSON.parse(JSON.stringify(feedbackData)) as IFeedbackProps;
    newFeedback.mesg = `Failed to save list${message ? `: ${message}` : ''}`;
    newFeedback.severity = 'error';
    setFeedbackData(newFeedback);
    setShowFeedback(true);
  }, [ feedbackData, setFeedbackData, setShowFeedback ]);

  const saveListSuccess = useCallback(() => {
    const newFeedback = JSON.parse(JSON.stringify(feedbackData)) as IFeedbackProps;
    newFeedback.mesg = 'Successfully saved list.';
    newFeedback.severity = 'success';

    setFeedbackData(newFeedback);
    setShowFeedback(true);

    (new ListsService()).getAll()
      .then((res) => {
        if (res.data) {
          const idx = res.data.findIndex((lst) => lst.id === queuedList?.id);

          if (idx > -1) {
            setQueuedList(JSON.parse(JSON.stringify(res.data[idx])));
          }

          setData(res.data);
        }
      });
  }, [feedbackData, queuedList, setFeedbackData, setShowFeedback]);

  const saveListStart = useCallback((list: IListProps) => {
    (new ListsService()).update(list)
      .then((res) => {
        if (res.success) {
          saveListSuccess();
        }
        else if (res.error) {
          saveError(res.message || '');
        }
      })
      .catch((err) => saveError(err));
  }, [ saveListSuccess, saveError ]);

  const addBtn = useMemo(() => (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Button
          disabled={queuedList !== undefined}
          onClick={() => {
            setQueuedList({
              title: '',
              items: [],
            });
          }}
        >
          Add List
        </Button>
      </Paper>
    </Grid>
  ), [ classes, queuedList ]);

  const feedback = useMemo(() => (
    <Feedback
      mesg={feedbackData.mesg}
      open={showFeedback}
      onClose={() => {
        const newFeedback = JSON.parse(JSON.stringify(feedbackData)) as IFeedbackProps;
        newFeedback.mesg = '';
        newFeedback.severity = 'info';
        setFeedbackData(newFeedback);
        setShowFeedback(false);
      }}
      severity={feedbackData.severity}
    />
  ), [ feedbackData, setFeedbackData, setShowFeedback, showFeedback ]);

  const listEditor = useMemo(() => (
      <ListEditor
        cancelAction={() => {
          setQueuedList(undefined)
        }}
        data={queuedList}
        saveAction={saveListStart}
      />
  ), [ queuedList, saveListStart, setQueuedList ]);

  const listetts = useMemo(() => (
    data.map((listData) => (
      <Listette
        data={listData}
        key={listData.id}
        onClick={() => {
          const copy = JSON.parse(JSON.stringify(listData));
          console.log('copy', copy);
          setQueuedList(copy);
        }}
      />
    )
  )), [data, setQueuedList]);

  useEffect(() => {
    (new ListsService()).getAll()
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
  }, [setData]);

  return (<>
    { feedback }
    <Grid container spacing={2}>
      { addBtn }

      <MenuItem
        path="/"
        onClick={() => navigate('/')}
        value="Main Menu"
        variant='half'
      />

      { queuedList ? listEditor : listetts }
    </Grid>
  </>);
};

export default Lists;
