import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Icon, Button, Toast } from 'native-base';
import axios from 'axios';
import * as actions from '../actions';



class LoginScreen extends Component {

  constructor(props) {
     super(props);
     this.state = { email: '', password: '', error: null, loading: false };
     this.focusNextField = this.focusNextField.bind(this);
     this.inputs = {};
   }

     focusNextField(id) {
         this.inputs[id]._root.focus();
     }



      handleSubmit = async () => {
      let {email,password} = this.state;
      if(!email){
            this.handleError("Email is required!")
            return false;
      }
      if(!password){
           this.handleError("Password is required!")
            return false;
      }
      this.setState({ error: null, loading: true });

      try {
          let data = {email:this.state.email,password:this.state.password};
          this.props.signIn(data, () => {
              this.props.navigation.navigate('home');
          }).catch(error => {
            return error;
          });
        this.props.navigation.navigate('home')
        this.setState({ loading: false });
      } catch (err) {
        this.setState({ error: 'Something went wrong', loading: false });
      }
    }


    handleError(error){
      Toast.show({
                text: error,
                buttonText: "Okay",
                type: "danger"
          })
    }


    render() {
       return (
         <View style={styles.container}>
              <Item>
                 <Icon active name='ios-contact' />
                 <Input
                     placeholder='Email'
                     value={this.state.email}
                     autoCapitalize='none'
                     autoFocus={true}
                     onSubmitEditing={() => {
                       this.focusNextField('password');
                     }}
                     returnKeyType={ "next" }
                     ref={ input => {
                       this.inputs['email'] = input;
                     }}
                     onChangeText={email => this.setState({ email })}
                      />
               </Item>
               <Item>
                 <Icon active name='ios-lock' />
                 <Input
                     placeholder='Password'
                     value={this.state.password}
                     autoCapitalize='none'
                     secureTextEntry={true}
                     onSubmitEditing={() => {
                         this.handleSubmit()
                      }}
                      returnKeyType={ "done" }
                      ref={ input => {
                        this.inputs['password'] = input;
                      }}
                      onChangeText={password => this.setState({ password })}
                      />
               </Item>
             <View style={{justifyContent: "center" }}>
              {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <Button primary onPress={() => this.handleSubmit()} style={styles.loginButtom}><Text style={{color:'white'}}> Login </Text></Button>
              }
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
})

export default connect(null, actions)(LoginScreen);
