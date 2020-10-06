import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
// import FacebookIcon from '@material-ui/icons/Facebook'
import Copyright from '../../Components/Layout/Copyright'
import backgroundLogin from './backgroundLogin.jpg'
import logoMorita from './morita_logo.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import { login } from '../../services/Api/loginApi'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundLogin})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: "30vh",
  },

  title: {
    fontWeight: 200,
    fontSize: "3rem",
    marginTop: "3rem",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loading: {
    // display: 'flex',
    // '& > * + *': {
    // marginLeft: theme.spacing(2),
    zIndex: "2",
    backgroundColor: "#1f1c1cb2",
    color: "#fff",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "-20px",
    // }
  },
}))

export default function SignInSide() {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {
    // setLoading(true);
    console.log(data)
    login(data)
  }
  const [loading, setLoading] = useState(false);
  return (
    <Grid className={classes.root} component='main' container>
      <CssBaseline />
      <Grid className={classes.image} item md={7} sm={4} xs={false} />
      {loading &&
        <div className={classes.loading}>
          <CircularProgress color="secondary" />
        </div>
      }
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={classes.paper}>
          <img className={classes.logo} src={logoMorita} alt="Logo" />
          <h1 className={classes.title}>Entrar</h1>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoComplete='email'
              autoFocus
              fullWidth
              // id='email'
              label='Endereço de E-mail'
              margin='normal'
              name='username'
              required
              variant='outlined'
              inputRef={register}
            // ref={register()}
            />
            {/* {errors.email && <span>Informe seu email</span>} */}
            <TextField
              autoComplete='current-password'
              fullWidth
              // id='password'
              label='Senha'
              margin='normal'
              name='password'
              required
              type='password'
              variant='outlined'
              inputRef={register}
            // ref={register}
            />
            {errors.password && <span>Informe sua senha</span>}
            <Button className={classes.submit} color='primary' fullWidth type='submit' variant='contained'>
              Entrar
            </Button>
            {/* <Button
              color='blue'
              fullWidth
              // onClick={handleSignIn}
              size='large'
              variant='contained'>
              <FacebookIcon className={classes.socialIcon} />
              Login pelo Facebook
            </Button> */}
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/SignUp' variant='body2'>
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
  )
}
