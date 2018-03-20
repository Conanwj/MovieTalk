'use strict';

import React from 'react-native';


let{StyleSheet}=React;

let styles = StyleSheet.create({



  backgroundImage:{
    flex:1,
    padding:1,

  },


  image:{
    width:99,
    height:138,
    margin:6,
  },
  item:{
    // backgroundColor:'#fff',
    // borderWidth:1,
    // borderColor:'#6435c9',
    // margin:6,
    // flex:1,
     flexDirection:'row',
     borderBottomWidth:1,
     borderColor:'rgba(100,53,201,0.1)',
     paddingBottom:6,
     paddingTop:8,
     flex:1,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6,
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'#6435c9',
    marginBottom:6,
  },
  itemMeta:{
    fontSize:16,
    color:'rgba(0,0,0,0.6)',
    marginBottom:6,
  },
  redText:{
    color:'#db2828',
    fontSize:15,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,0.3)',
    alignItems:'center',
  },
  overlayHeader:{
     fontSize:33,
     fontFamily:"Helvetica Neue",
     fontWeight:'200',
     color:'#eae7ff',
     padding:10,

  },
  overlaySubHeader:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
    paddingTop:0,
  },
  itemOne:{
    // alignSelf:'flex-start'
  },
  itemTwo:{},
  itemThree:{
    // alignSelf :'flex-end',
    flex:2,
  },
  itemText:{
    fontSize:33,
    fontFamily:"Helvetica Neue",
    fontWeight:'200',
    color:'#6435c9',
    padding:30,
  },
  container: {
    flexDirection:"row", //默认值为 column
    backgroundColor: '#EAE7FF',
    flex: 1,
    // paddingTop:8,

    // justifyContent: 'space-around ',//flex-start 为默认值 center 垂直居中 flex-end靠下
                        //space-between 将空白区域平分到之间
    // alignItems: 'center',//flex-start 靠左 //flex-end 靠右

    // paddingTop:40,
    // margin:30,
    // borderWidth:1,
    // borderColor:'#6435C9',
    // borderRadius:16,
    // shadowColor:'#6435C9',
    // shadowOpacity:0.6,
    // shadowRadius:2,
    // shadowOffset:{
    //   height:1,
    //   width:0,
    // }
  },
});
export{styles as default };
