import React from 'react';
import BingProperties from './BingProperties';
import EventHubProperties from './EventHubProperties';
import FacebookCommentProperties from './FacebookCommentProperties';
import FacebookPostProperties from './FacebookPostProperties';
import HTMLProperties from './HTMLProperties';
import InstagramTagProperties from './InstagramTagProperties';
import InstagramLocationProperties from './InstagramLocationProperties';
import RSSProperties from './RSSProperties';
import RadioProperties from './RadioProperties';
import RedditProperties from './RedditProperties';
import TwitterProperties from './TwitterProperties';

const STREAM_PROPERTY_STATES = (stream) => ({
  Bing: <BingProperties stream={stream}/>,
  EventHub: <EventHubProperties stream={stream}/>,
  FacebookComment: <FacebookCommentProperties stream={stream}/>,
  FacebookPost: <FacebookPostProperties stream={stream}/>,
  HTML: <HTMLProperties stream={stream}/>,
  InstagramLocation: <InstagramLocationProperties stream={stream}/>,
  InstagramTag: <InstagramTagProperties stream={stream}/>,
  RSS: <RSSProperties stream={stream}/>,
  Radio: <RadioProperties stream={stream}/>,
  Reddit: <RedditProperties stream={stream}/>,
  Twitter: <TwitterProperties stream={stream}/>
});

const StreamProperties = ({state, stream, onSaveStream}) => {
  return (
    <div>
      {STREAM_PROPERTY_STATES(stream, onSaveStream)[state]}
    </div>
  );
}

export default StreamProperties;