import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './../../Components/Layout/Footer'
import PrimarySearchAppBar from '../../Components/Layout/Toolbar';
// import { Container } from './styles';

function Account() {
  return(
    <>
      <CssBaseline />
      <PrimarySearchAppBar />
      <main>
        <h1>Pedidos</h1>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  )
}

export default Account;