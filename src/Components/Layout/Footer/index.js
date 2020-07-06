import React from "react"
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Copyright from '../Copyright'

const Footer =() =>(
    <footer>
        <Typography variant="h6" align="center" gutterBottom>
          DeliveryFood
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          "Quando sentir que a vida está fora de foco, volte ao básico. Respire."
          <Typography variant="subtitle2">Sr Miyagi</Typography>
        </Typography>
        <Copyright />
      </footer>
)
export default Footer;