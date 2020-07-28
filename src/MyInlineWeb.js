import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyInlineWeb extends Component {
  render() {
    return (
        <WebView
          source={{ uri: 'https://green-way.com.ua/uk/test-pdd' }}
          style={{ marginTop: 20 }}
        />
    );
  }
}