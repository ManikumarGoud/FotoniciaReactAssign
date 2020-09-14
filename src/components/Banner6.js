import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function Banner6() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{ backgroundColor: " #8BC34A" }}>
      <h2 style={{ color: "white" }}>
        <b>Payment Option</b>
      </h2>
      <FormGroup row style={{alignContent:"center"}}>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
            />
          }
          label="Pay via Upi"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
            />
          }
          label="Pay at Shop"
        />
      </FormGroup>
      
    </div>
  );
}
