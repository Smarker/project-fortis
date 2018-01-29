import React from 'react';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

class RedditProperties extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Application Id"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Application Secret"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Subreddit"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Search Limit"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Search Result Type"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <ChipInput
          floatingLabelText="Reddit Keywords"
          defaultValue={['foo', 'bar']}
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
      </div>
    );
  }
}

export default RedditProperties;