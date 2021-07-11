import './src/utils/polyfill'

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import React from 'react'
import LanguageProvider from './src/providers/LanguageProvider'
import App from './src/App'
import { name as appName } from './app.json'
import store from './src/store/store'

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./ReactotronConfig')
}

const render = () => {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LanguageProvider>
  )
}

AppRegistry.registerComponent(appName, () => render)
