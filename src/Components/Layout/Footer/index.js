import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from '../Copyright';
const Footer = () => (
  <>
    <footer>
      <Typography align="center" gutterBottom variant="h6">
        DeliveryFood
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        component="p"
        variant="subtitle1">
        "Quando sentir que a vida está fora de foco, volte ao básico. Respire."
      </Typography>
      <Typography align="center" variant="subtitle2">
        Sr Miyagi
      </Typography>
      <Copyright />
    </footer>
  </>
);
export default Footer;
