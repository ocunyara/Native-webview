import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler } from "react-native";

export default class ViewSite extends Component {
  
  WEBVIEW_REF = React.createRef();
  
  state = {
    canGoBack: false,
  };
  
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  
  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };
  
  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };
  
  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  }
  
  render() {
    return (
        <WebView
          source={{ uri: "https://reactnative.dev/" }}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange}
          style={{ marginTop: 20 }}
        />
    );
  }
}