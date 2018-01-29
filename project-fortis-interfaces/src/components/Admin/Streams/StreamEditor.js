import React from 'react';
import { DataGrid } from '../DataGrid';
import { getColumns } from '../shared';
import StreamParamsButtonFormatter from './StreamParamsButtonFormatter';
import StreamStatusButtonFormatter from './StreamStatusButtonFormatter';
import CreateStream from './CreateStream/CreateStream';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class StreamEditor extends React.Component {
  componentDidMount() {
    this.props.flux.actions.ADMIN.load_streams();
  }

  getStreamColumns() {
    const columnValues = [
      {key: "pipelineKey", name: "Type"},
      {width: 115, key: "status", name: "Status", formatter: <StreamStatusButtonFormatter flux={this.props.flux}/>, getRowMetaData: (row) => row},
      {width: 70, key: "params", name: "Edit", formatter: <StreamParamsButtonFormatter flux={this.props.flux}/>, getRowMetaData: (row) => row}
    ];

    return getColumns(columnValues);
  }

  render() {
    return (
      this.getStreamColumns().length > 0 ?
        <div className="row">
          <div className="col-lg-6">
          <Card>
            <CardTitle title="Configured Streams"/>
            <Divider />
            <CardText>
              <DataGrid
                rowHeight={40}
                minHeight={500}
                toolbar={null}
                rowSelection={null}
                rowKey="streamId"
                guidAutofillColumn="streamId"
                columns={this.getStreamColumns()}
                rows={this.props.streams}
                handleSave={this.handleSave}
              />
            </CardText>
          </Card>
          </div>
          <div className="col-lg-6">
            <div className="p-2">
              <CreateStream />
            </div>
          </div>        
        </div>
      : <div />
    );
  }
}

export default StreamEditor;