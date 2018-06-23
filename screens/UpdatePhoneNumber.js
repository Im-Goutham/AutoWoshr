import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, Button} from 'native-base';
import Header from '../components/Header';


class UpdatePhoneNumber extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
               <Text>UpdatePhoneNumber</Text>
               <Text>UpdatePhoneNumber</Text>
               <Text>UpdatePhoneNumber</Text>
                <Button primary onPress={() => this.props.navigation.navigate('home')}><Text style={{color:'white'}}> Update </Text></Button>
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

export default UpdatePhoneNumber;
