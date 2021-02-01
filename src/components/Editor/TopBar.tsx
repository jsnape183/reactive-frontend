// components/Topbar.js
import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";

interface TopBarPropTypes {
  onTogglePreview: (value: boolean) => void;
  showPreview: boolean;
}

const TopBar: React.FC<TopBarPropTypes> = ({
  onTogglePreview,
  showPreview,
}) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={enabled} onChange={(_, value) => {}} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log("TODO");
            }}
          >
            Serialize JSON to console
          </MaterialButton>

          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log("TODO");
            }}
          >
            Serialize React to console
          </MaterialButton>

          <FormControlLabel
            control={
              <Switch
                checked={showPreview}
                onChange={(_, value) => onTogglePreview(value)}
              />
            }
            label="Preview"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBar;
