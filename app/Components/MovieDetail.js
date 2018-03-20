/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles/Main';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  NavigatorIOS,

} from 'react-native';

class MovieDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      movieDetail:''
    };
    console.log(movie.title);
    const REQUEST_URL='https//api.douban.com/v2/subject/${this.props.movie.id}';
    this.fetchData(REQUEST_URL);
  }

    fetchData(REQUEST_URL){
      fetch(REQUEST_URL)
       .then(response=>response.json())
       .then(responseData=>{
         this.setState({
           movieDetail:responseData
         });
       })
       .done();
    }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.loading}>
          <Text>{this.state.movieDetail.summary}</Text>
        </View>
      </View>
    );
  }
}

export { MovieDetail as default };
