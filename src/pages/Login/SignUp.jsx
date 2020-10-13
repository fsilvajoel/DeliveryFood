import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
// import FacebookIcon from '@material-ui/icons/Facebook'
import Copyright from '../../Components/Layout/Copyright'
import backgroundLogin from './images/backgroundLogin.jpg'
import logoMorita from './images/morita_logo.png'
import CircularProgress from '@material-ui/core/CircularProgress'
import { registration } from '../../services/Api/loginApi'
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
    height: '20vh',
  },
  loading: {
    zIndex: '2',
    backgroundColor: '#1f1c1cb2',
    color: '#fff',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 200,
    fontSize: '3rem',
    marginTop: '3rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {
    // setLoading(true);
    console.log(data)
    registration(data)
  }
  const [loading, setLoading] = useState(false)
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      {loading && (
        <div className={classes.loading}>
          <CircularProgress color='secondary' />
        </div>
      )}
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={classes.paper}>
          <img className={classes.logo} src={logoMorita} alt='Logo' />
          <h1 className={classes.title}>Cadastrar-se</h1>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoComplete='Nome'
              autoFocus
              fullWidth
              label='Crie um username. Ex: @morita'
              margin='normal'
              name='username'
              required
              variant='outlined'
              inputRef={register}
            />
            <TextField
              autoComplete='email'
              autoFocus
              fullWidth
              label='Endereço de E-mail'
              margin='normal'
              name='email'
              required
              variant='outlined'
              inputRef={register}
            />
            <TextField
              autoComplete='current-password'
              fullWidth
              label='Senha'
              margin='normal'
              name='password1'
              required
              type='password'
              variant='outlined'
              inputRef={register}
            />
            <TextField
              autoComplete='current-password'
              fullWidth
              label='Confirmar Senha'
              margin='normal'
              name='password2'
              required
              type='password'
              variant='outlined'
              inputRef={register}
            />
            {errors.password && <span>Informe sua senha</span>}
            <Button className={classes.submit} color='primary' fullWidth type='submit' variant='contained'>
              Pronto
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href='/login' variant='body2'>
                  Já cadastrado? Entrar!
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  )
}
