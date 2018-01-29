import React from 'react';
import StreamProperties from './StreamProperties/StreamProperties';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { CLIENT_RENEG_LIMIT } from 'tls';

const streams = [
  'Bing',
  'EventHub',
  'FacebookComment',
  'FacebookPost',
  'HTML',
  'InstagramLocation',
  'InstagramTag',
  'RSS',
  'Radio',
  'Reddit',
  'Twitter'
];

class CreateStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dropdownValue: streams[0] || 'Bing',
      stream: {}
    };
  }

  onDropdownChange = (event, index, value) => {
    this.setState({ dropdownValue: value });
  }

  onSaveStream = (streamProperties) => {
    //[...we will use the dataFromChild here...]
  }

  saveStream = () => {
    console.log(this.state.stream);
  }

  render() {
    return (
      <Card>
        <CardTitle title="Create Stream"/>
        <Divider />
        <CardText style={{backgroundColor: '#fafafa'}}>
          <Subheader><b>Stream Source</b></Subheader>
          <DropDownMenu 
            value={this.state.dropdownValue}
            style={{width: 300}}
            autoWidth={false}
            onChange={this.onDropdownChange}>
            { 
              streams.map(stream => 
                <MenuItem key={stream} value={stream} primaryText={stream} />
              )
            }
          </DropDownMenu>
          <br />
          <Divider />
          <Subheader><b>Stream Properties</b></Subheader>
          <StreamProperties 
            state={this.state.dropdownValue}
            stream={this.state.stream}
            onSaveStream={this.onSaveStream} />
        </CardText>
        <Divider />
        <CardActions>
          <div className="text-right">
            <FlatButton label="Save Stream" primary={true} onClick={this.saveStream} />
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default CreateStream;