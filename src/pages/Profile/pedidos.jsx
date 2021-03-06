import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './../../Components/Layout/Footer'
import Navbar from '../../Components/Layout/Navbar';
import SimpleTable from '../../Components/Table'
import Container from '@material-ui/core/Container';

function Pedidos() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Container
          fixed
          style={{ height: '70vh' }}
        >
          <h1>Pedidos</h1>
          <SimpleTable />
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  )
}

export default Pedidos;