import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btnlink: {
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default useStyles;
