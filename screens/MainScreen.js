import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button , Icon} from 'native-base';

import Header from '../components/Header';


class MainScreen extends Component {

    render() {
       return (
           <View style={styles.container}>
               <View>
                  <Button primary onPress={() => this.props.navigation.navigate('login')}><Text style={{color:'white'}}> Login </Text></Button>
               </View>
               <View>
                   <Button primary onPress={() => this.props.navigation.navigate('signup')}><Text style={{color:'white'}}> Sign Up </Text></Button>
               </View>
          </View>
       )
    }
}


const styles = StyleSheet.create({
      container: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
    }
})

export default MainScreen;
