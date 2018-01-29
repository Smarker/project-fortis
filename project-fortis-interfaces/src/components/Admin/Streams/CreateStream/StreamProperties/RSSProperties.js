import React from 'react';
import TextField from 'material-ui/TextField';

class RSSProperties extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Connection Timeout (seconds)"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Read Timeout (seconds)"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Polling Period (seconds)"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
      />
      </div>
    );
  }
}

export default RSSProperties;