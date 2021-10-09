import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default useStyles;
