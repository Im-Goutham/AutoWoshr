import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon,Button} from 'native-base';
import SubHeader from '../components/SubHeader';


class SelectLocationScreen extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <SubHeader navigation={this.props.navigation} title={'Select Location'}/>
               <View style={styles.container}>
               <Text>SelectLocationScreen</Text>
               <Text>SelectLocationScreen</Text>
               <Text>SelectLocationScreen</Text>
               <Text>SelectLocationScreen</Text>
               <View style={{flexDirection:'row',justifyContent:'center'}}>
               <Button primary onPress={() => {this.props.navigation.navigate('chatScreen')}}  style={styles.loginButtom}><Text style={{color:'white'}}> NEXT </Text></Button>
              </View>
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

export default SelectLocationScreen;
