import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listEditorRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default useStyles;
