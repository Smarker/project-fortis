import React from 'react';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

class BingProperties extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stream: {}
    }
  }

  onSaveStream = () => {
    const stream = {
      accessToken: this.props.stream.accessToken,
      searchInstanceId: this.props.stream.searchInstanceId
    };
    this.props.onSaveStream(stream);
  }

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
    //console.log(this.state.stream);
  };

  render() {
    return (
      <div>
        <TextField
          value={this.state.stream.accessToken}
          onChange={this.handleChange}
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Bing Access Token"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <TextField
          value={this.state.stream.searchInstanceId}
          onChange={this.handleChange}
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Bing Search Instance Id"
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        /><br />
        <ChipInput
          value={this.state.stream.keywords}
          onChange={this.handleChange}
          floatingLabelText="Bing Search Keywords"
          defaultValue={['foo', 'bar']}
          style={{ "paddingLeft": 16, "paddingRight": 16, "width":"95%"}}
        />
      </div>
    );
  }
}

export default BingProperties;