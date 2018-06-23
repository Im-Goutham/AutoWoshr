import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Tab, Tabs, Button } from 'native-base';
import Header from '../components/Header';


class HomeScreen extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Home'}/>
               <Tabs initialPage={1} locked={true}>
                 <Tab heading="Car">
                   <View>
                     <Text>1</Text>
                   </View>
                 </Tab>
                 <Tab heading="Bike">
                   <View>
                     <Text>2</Text>
                   </View>
                 </Tab>
                 <Tab heading="Luxury">
                 <View>
                   <Text>3</Text>
                 </View>
                 </Tab>
               </Tabs>
               <View style={{flexDirection:'row',justifyContent:'center'}}>
               <Button primary onPress={() => {this.props.navigation.navigate('selectCarScreen')}} style={styles.loginButtom}><Text style={{color:'white'}}> MAKE A BOOKING </Text></Button>
              </View>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
    loginButtom: {
        width:200,
        justifyContent:'center',
        marginTop:20
    }
});

export default HomeScreen;
