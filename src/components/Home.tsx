import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useContext } from 'react';
import AuthContext from '../state/contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      padding: "5rem"
    },
  }),
);

function Home() {
    const classes = useStyles();
    const { state } = useContext(AuthContext);
    const { user } = state;

    return (
        <Grid className={classes.root} container alignItems='center' justifyContent='center'>
            {`Hello, ${user}`}
        </Grid>
    )
}

export default Home;