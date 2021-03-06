import React from 'react';
import { SERVICES } from '../../../services/Dashboard';
import async from 'async';
import L from 'leaflet';
import '../../../styles/Insights/HeatMap.css';
import numeralLibs from 'numeral';
import { hasChanged, getSentimentAttributes } from '../shared';
import ClusterGroup from './MarkerCluster';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.0.2/dist/images/";

export default class MarkerClusterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null
    };

    this.clusterIconFunction = this.clusterIconFunction.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.asyncFetchHeatmapFromTileService = this.asyncFetchHeatmapFromTileService.bind(this);
  }

  componentDidMount() {
    this.rebuildHeatmap(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (hasChanged(this.props, nextProps)) {
      this.rebuildHeatmap(nextProps);
    }
  }

  rebuildHeatmap(props) {
    let self = this;

    if (!props.bbox) {
      return;
    }

    this.asyncFetchHeatmapFromTileService(props, (err, heatmapClusters) => {
      if (err) return;

      const markers = self.buildHeatmap(heatmapClusters);
      self.setState({ markers });
    });
  }

  clearClusters() {
    this.refs.clusterGroup.leafletElement.clearLayers();
  }

  asyncFetchHeatmapFromTileService(props, callback) {
    const { dataSource, timespanType, termFilters, zoomLevel,
      maintopic, externalsourceid, fromDate, toDate, heatmapTileIds,
      selectedplace, bbox, enabledStreams } = props;

    async.concat(heatmapTileIds, (tileId, tileCallback) => {
      SERVICES.getHeatmapTiles(fromDate, toDate, zoomLevel, maintopic, tileId, timespanType,
        dataSource, externalsourceid, Array.from(termFilters), selectedplace.placeid ? bbox : undefined,
        enabledStreams, (error, response, heatmap) => {
          if (!error) {
            tileCallback(null, heatmap.data.heatmap.features);
          } else {
            console.error(error);
            tileCallback(null, null);
          }
        });
    }, callback);
  }

  tileToMarker(tile) {
    const { coordinates, properties } = tile;
    const options = Object.assign({}, properties);

    return Object.assign({}, { lat: coordinates[1], lng: coordinates[0] }, { options });
  }

  clusterCssFunction(cluster) {
    const { clusterColorField } = this.props;
    const maxClusterValue = cluster.getAllChildMarkers().reduce((prevMax, b) => Math.max(prevMax, b.options[clusterColorField]), 0);
    const sentiment = getSentimentAttributes(maxClusterValue || 0);

    return `marker-cluster-base ${sentiment.style}`;
  }

  clusterIconFunction(cluster) {
    const { clusterValueField } = this.props;
    const cssClass = this.clusterCssFunction(cluster);
    const value = cluster.getAllChildMarkers().reduce((prevTotal, child) => child.options[clusterValueField] + prevTotal, 0);

    return L.divIcon({
      html: `<span>${numeralLibs(value).format(value > 1000 ? '+0.0a' : '0a')}</span>`,
      className: cssClass,
      iconSize: L.point(40, 40, true)
    });
  }

  onMarkerClick(marker){
    this.props.moveMapToNewLocation(marker.options.tile.id);
  }

  buildHeatmap = heatmaps => heatmaps.map(this.tileToMarker);

  render() {
    if (!this.props.bbox.length) return null;
    const { markers } = this.state;

    const config = {
      chunkedLoading: true,
      zoomToBoundsOnClick: true,
      showCoverageOnHover: false,
      enableDefaultStyle: true,
      iconCreateFunction: this.clusterIconFunction,
      singleMarkerMode: true
    };

    return (
      markers ?
        <ClusterGroup
          wrapperOptions={{ enableDefaultStyle: true }}
          ref="clusterGroup"
          markers={markers}
          onMarkerClick={this.onMarkerClick}
          options={config}
        /> : null
    );
  }
}