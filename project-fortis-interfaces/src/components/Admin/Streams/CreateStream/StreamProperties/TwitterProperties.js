import React from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import ChipInput from 'material-ui-chip-input';

class TwitterProperties extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Twitter Consumer Key"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Twitter Consumer Secret"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Twitter Access Token"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Twitter Access Token Secret"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <Toggle
          label="Watchlist Filtering Enabled"
          defaultToggled={true}
          style={{ "paddingLeft": 16, "paddingRight": 16}}
        />
        <ChipInput
          floatingLabelText="Twitter User Ids"
          defaultValue={['foo', 'bar']}
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
      </div>
    );
  }
}

export default TwitterProperties;