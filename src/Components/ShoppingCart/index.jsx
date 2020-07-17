import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import SacolaCard from "./Card";
export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
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
            {/* <Box p={2}> */}
            <SacolaCard />
            {/* <Typography>The content of the Popover.</Typography> */}
            {/* </Box> */}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
