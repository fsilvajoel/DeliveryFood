import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import BagCard from "./list";
import { Card, CardContent, CardActions } from "@material-ui/core/";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    // whidth : "300px",
    width: "18rem",
  },
}));



export default function PopoverPopupState() {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="shopingCart">
      {popupState => (
        <div>
          <IconButton
            variant="contained"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            <Badge
              badgeContent={3}
              color="secondary"
            >
              Sacola
            <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Card className={classes.root}>
              <CardContent>
                <h2>Sacola de pedidos</h2>
                <BagCard />
              </CardContent>
              <CardActions style={{ flexDirection: "row-reverse" }}>
                <Link to="/checkout">
                  <Button ariant="outlined" size="medium">Finalizar</Button>
                </Link>
              </CardActions>
            </Card>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
