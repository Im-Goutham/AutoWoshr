import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, Button} from 'native-base';
import Header from '../components/Header';


class VerifyPhoneNumber extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
               <Text>VerifyPhoneNumber</Text>
               <Text>VerifyPhoneNumber</Text>
               <Text>VerifyPhoneNumber</Text>
               <Button primary onPress={() => this.props.navigation.navigate('updatePhoneNumber')}><Text style={{color:'white'}}> Verify </Text></Button>
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

export default VerifyPhoneNumber;
