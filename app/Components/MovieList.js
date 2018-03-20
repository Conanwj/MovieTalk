/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles/Main';
import MovieDetail from'./MovieDetail' ;
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


const REQUEST_URL='https://api.douban.com/v2/movie/top250';
class MovieList extends Component {
  constructor(props) {
   super(props);

      this.state={
        movies:new ListView.DataSource({
          rowHasChanged:(row1,row2)=>row1!==row2
        }),
        loader:false
      };
      this.fetchData();
 }
 fetchData(){
   fetch(REQUEST_URL)
    .then(response=>response.json())
    .then(responseData=>{
      this.setState({
        movies:this.state.movies.cloneWithRows(responseData.subjects),
        loaded:true
      });
    })
    .done();
 }

 showMovieDetail(movie){
    console.log(movie.title);
    this.props.navigator.push({
     title:movie.title,
     Component:MovieDetail,
     passProps:(movie),

   });
   console.log(movie.title);
 }

 renderMovieList(movie){
   console.log("sdkjfkasdf");
   console.log("------>"+this.props.navigator.push == null);
   return(
     <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={()=>this.showMovieDetail(movie)}>
     <View style={styles.item}>
       <View style={styles.itemImage}>
          <Image
            source={{uri:movie.images.large}}
            style={styles.image}
          />

       </View>
       <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{movie.title}</Text>
          <Text style={styles.itemMeta}>
            {movie.original_title}({movie.year})
          </Text>
          <Text style={styles.redText}>
            {movie.rating.average}
          </Text>
       </View>
     </View>
     </TouchableHighlight>
   );
 }


  render() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
              <ActivityIndicator
                  size="large"
                  color="#6435c9"
               />
          </View>
        </View>
      );

    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
        />

      </View>
    );
  }
}

 export {MovieList as default} ;