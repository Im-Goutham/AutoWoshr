import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon,Button} from 'native-base';
import SubHeader from '../components/SubHeader';


class SelectCarScreen extends Component {

    render() {
       return (
           <View style={{flex:1}}>
               <SubHeader navigation={this.props.navigation} title={'Select Car'}/>
               <View style={styles.container}>
               <Text>SelectCarScreen</Text>
               <Text>SelectCarScreen</Text>
               <Text>SelectCarScreen</Text>
               <Text>SelectCarScreen</Text>
               <View style={{flexDirection:'row',justifyContent:'center'}}>
               <Button primary onPress={() => {this.props.navigation.navigate('selectLocationScreen')}} style={styles.loginButtom}><Text style={{color:'white'}}> MAKE A BOOKING </Text></Button>
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

export default SelectCarScreen;
