/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles/Main';
import MovieList from './MovieList';
import {
  Text,
  View,
  NavigatorIOS,

} from 'react-native';
  class Featured extends Component{
    render(){
      return(
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title:'推荐电影',
            component:MovieList,
            shadowHidden:true,
            translucent:true
          }}

          barTintColor="darkslateblue"
          titleTextColor="rgba(255,255,255,0.8)"
          tintColor="rgba(255,255,255,0.8)"


        />
      );
    }

  }
  export {Featured as default};
