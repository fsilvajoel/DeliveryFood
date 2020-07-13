import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { Facebook as FacebookIcon} from 'icons';
import FacebookIcon from '@material-ui/icons/Facebook';

import Copyright from '../../Components/Layout/Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      component="main"
      container
    >
      <CssBaseline />
      <Grid
        className={classes.image}
        item
        md={7}
        sm={4}
        xs={false}
      />
      <Grid
        component={Paper}
        elevation={6}
        item
        md={5}
        sm={8}
        square
        xs={12}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
          >
            Entrar
          </Typography>
          <form
            className={classes.form}
            noValidate
          >
            <TextField
              autoComplete="email"
              autoFocus
              fullWidth
              id="email"
              label="Endereço de E-mail"
              margin="normal"
              name="email"
              required
              variant="outlined"
            />
            <TextField
              autoComplete="current-password"
              fullWidth
              id="password"
              label="Senha"
              margin="normal"
              name="password"
              required
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox
                color="primary"
                value="remember"
              />}
              label="Lembrar de mim"
            />
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Entrar
            </Button>
            <Button
              color="blue"
              fullWidth
              // onClick={handleSignIn}
              size="large"
              variant="contained"
            >
              <FacebookIcon className={classes.socialIcon} />
                      Login pelo Facebook
            </Button>
            <Grid container>
              <Grid
                item
                xs
              >
                <Link
                  href="#"
                  variant="body2"
                >
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/SignUp"
                  variant="body2"
                >
                  {'Não possui conta? Criar'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}