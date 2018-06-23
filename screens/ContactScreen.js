import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
import Header from '../components/Header';


class ContactScreen extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Contact'}/>
               <View style={styles.container}>
               <Text>ContactScreen</Text>
               <Text>ContactScreen</Text>
               <Text>ContactScreen</Text>
               <Text>ContactScreen</Text>
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
    }
});

export default ContactScreen;
