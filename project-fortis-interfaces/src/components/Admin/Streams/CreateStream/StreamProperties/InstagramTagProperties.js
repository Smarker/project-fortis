import React from 'react';
import TextField from 'material-ui/TextField';

class InstagramTagProperties extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Instagram Authentication Token"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Instagram Tag"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        />
      </div>
    );
  }
}

export default InstagramTagProperties;