import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, Switch} from 'react-native-router-flux'

import reducers from '../reducers';

const logger = createLogger();

const middleware = [thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const RouterWithRedux = connect()(Router);

// Containers
import Start from './start';
import TabOne from './tabone';

// Components
import TabIcon from '../components/tabicon';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
            <Scene key="modal" component={Modal}>
                <Scene key="root">
                    <Scene key="start" 
                        component={Start} 
                        title="Start" 
                        initial={true}  
                        hideNavBar={true}
                        sceneStyle={styles.sceneStyle}
                         />
                </Scene>
                <Scene key="tabbar"
                    tabs={true}
                    tabBarStyle={styles.tabBarStyle}
                >
                    <Scene
                        key="tabone"
                        title="Tab 1"
                        titleTab="Tab 1"
                        iconName="ios-book"
                        icon={TabIcon}
                        component={TabOne}
                        sceneStyle={styles.sceneDefault}
                    />
                </Scene>
            </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

let styles = {
    sceneStyle: {
        backgroundColor: "#ffffff",
        marginTop: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#edeeee',
        backgroundColor: '#ffffff'
    },
    sceneDefault: {
        flex: 1,
        marginTop: 65
    }
}