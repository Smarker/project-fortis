import React from 'react';
import TextField from 'material-ui/TextField';

class FacebookCommentProperties extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Facebook App Id"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Facebook App Secret"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Facebook Access Token"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        />
      </div>
    );
  }
}

export default FacebookCommentProperties;