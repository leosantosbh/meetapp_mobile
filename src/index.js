import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

// import { Container } from './styles';

class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('0858ea61-919f-477c-ae93-b1aaf04d02a6');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
