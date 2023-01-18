import React from 'react';
import { Grid, TextField, Typography, Box, Button, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useContext, useState } from 'react';
import AuthContext from '../state/contexts/AuthContext';
import { userLogin } from '../services/auth';
import { ActionTypes } from '../state/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      padding: "5rem"
    },
    button: {
        marginTop: "2rem",
        marginBottom: "1rem",
        color: "#fff",
        backgroundColor: "#1976d2",
        "&:hover": {
            backgroundColor: "#1565c0"
        }
    }
  }),
);

function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { state, dispatch } = useContext(AuthContext);
    const { loading, error } = state;

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch({ type: ActionTypes.StartLogin });
        try {
            const response = await userLogin(email, pass);
            dispatch({ type: ActionTypes.Success, payload: {user: response.user } });
        } catch (err) {
            let myError = err as Error;
            dispatch({ type: ActionTypes.Failure, payload: {error: myError.message} });
        }
    }

    return (
        <Grid className={classes.root} container alignItems='center' justifyContent='center'>
            {loading ? (
                <CircularProgress size={100}/>
            ) : (
                <Box>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.button}
                        >
                            Log in
                        </Button>
                    </Box>
                    {error && (
                        <Typography color="secondary" align="left">
                            {error}
                        </Typography>
                    )}
                </Box>
            )}
        </Grid>
    )
}

export default Login;