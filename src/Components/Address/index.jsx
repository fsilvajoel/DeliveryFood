import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ExploreIcon from '@material-ui/icons/Explore';
import { IconButton } from "@material-ui/core";
import AdressCard from "./Card";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "4px",
    fontSize: "1.5rem",
  },
}))
export default function PopoverPopupState() {
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <IconButton
            variant="contained"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            <span>
              Endereço
            </span>
            <ExploreIcon className={classes.icon} />
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
            <AdressCard />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
