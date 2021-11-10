import React from 'react';

import WebView from 'react-native-webview';

const SourceView = props => {
  const uri = props.route.params;
  return <WebView source={{uri: uri}} />;
};

export default SourceView;
