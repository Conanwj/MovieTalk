/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './app/Styles/Main';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Assets/Icons';
import Featured from './app/Components/Featured';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ListView,
  TabBarIOS,
} from 'react-native';

const REQUEST_URL='https://api.douban.com/v2/movie/top250';
export default class App extends Component {
  constructor(props) {
         super(props);
         this.state={
           selectedTab:'featured'
         };

  }

  render() {
    return(
      <View style={styles.container}>
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
        // systemIcon="featured"
        icon={{uri:icons.star,scale:2}}
        title="推荐电影"
        selectedIcon={{uri:icons.starActive,scale:8}}
        selected={this.state.selectedTab==='featured'}
        onPress={()=>{
          this.setState({
            selectedTab:'featured'
          })
        }}>
        <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        // systemIcon="most-viewed"
        icon={{uri:icons.board,scale:8}}
        title="北美票房"
        selectedIcon={{uri:icons.boardActive,scale:8}}
        selected={this.state.selectedTab==='featured'}
        selected={this.state.selectedTab==='us_box'}
        onPress={()=>{
          this.setState({
            selectedTab:'us_box'
          })
        }}>
            <USBox />
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    ) ;
  }
}
