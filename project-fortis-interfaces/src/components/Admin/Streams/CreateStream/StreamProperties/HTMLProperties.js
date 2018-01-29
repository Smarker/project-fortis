import React from 'react';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

class HTMLProperties extends React.Component {
  render() {
    return (
      <div>
        <ChipInput
          floatingLabelText="Feed Urls"
          defaultValue={['foo', 'bar']}
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Max Depth"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Polling Period (seconds)"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Cache Edit Distance Threshold (double)"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
      </div>
    );
  }
}

export default HTMLProperties;