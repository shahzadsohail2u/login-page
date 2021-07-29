import React, { useState, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import CountryCode from './CountryCode'

import PhoneInput from "react-native-phone-number-input";
const LoginScree = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [numberwa, setNumber] = useState('')
    const [code, setCode] = useState(false)
    const [countryCode, setCountryCode] = useState('+91')
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    const openIt = () =>{
        setCode(true)
        
    }

    const onSignUp = () =>{
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const mobile= /^\d{10}$/ ;
        const isValid =phoneInput.current?.isValidNumber(numberwa);
        console.log('countryCOde', phoneInput.current?.getCallingCode())
        if(!isValid) return alert('Invalid mobile number. Please enter a valid number.')
        if(name === ""){
          return alert("Please enter full name")
        }
         if (name.length < 3){
          return alert('Can not accept less than three letters')
        }
          if (email === ""){
          return  alert("Please enter email address")
        }
         if (!re.test(email)){
           return alert("Please type correct email")
        }
        if(password === ""){
            alert("Please enter password")
        }else if(password.length < 6 ){
            alert('Password should be greater than 6 letters')
        }else if( password.length > 18 ){
            alert('Password should be less than 18 letters')
        }else if (!regularExpression.test(password)){
            alert('password should contain special character')
        
        }else if (numberwa ===""){
            alert('Please enter mobile number')
        }else if(!mobile.test(numberwa)){
            alert('Please enter valid mobile number')
        }
        
             
        
    }

    console.log(name, email, password, countryCode)
    return ( 
        <View style={{ width: '100%' }}>

          
                <TextInput placeholder={"Full name"} style={styles.input} onChangeText = {(nam)=> setName(nam)}/>
                <TextInput placeholder={"Email"} style={styles.input} onChangeText = {(mail)=> setEmail(mail)}/>
                <TextInput placeholder={"Password"} style={styles.input} onChangeText = {(pas)=> setPassword(pas)} secureTextEntry = {true} />    
                <PhoneInput
            ref={phoneInput}
            defaultValue={numberwa}
            defaultCode="DM"
            layout= "second"
            onChangeText={(text) => {
              setNumber(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle = {{ width: '90%', alignSelf:'center', borderRadius: 20, marginBottom: 10}}
            textContainerStyle={{borderRadius:20}}
            textInputStyle = {{padding:0}}
            withDarkTheme
            withShadow
            autoFocus
          />
                {/* <View style ={{width: '100%', flexDirection: 'row' }}>
                    <TouchableOpacity style = {styles.code} onPress = {openIt}>
                       
                        <Text>{countryCode.code}</Text>
                    </TouchableOpacity >
                    <TextInput placeholder={"Mobile Number"} style={styles.num} onChangeText = {(num)=> setNumber(num)}  />    
                </View> */}
                {/* <CountryCode onClose = {() => setCode(false)} selectedCode = {(item) => setCountryCode(item)} visible = {code}/> */}
            <TouchableOpacity style ={styles.button} onPress={onSignUp}>
                <Text style = {{textAlign: 'center', color: 'white', fontWeight: 'bold',}}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScree

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        backgroundColor: 'white', 
        borderRadius: 22, 
        borderColor: 'white', 
        marginBottom: 16, 
        width: '90%',
        paddingLeft: 19,
        alignSelf: 'center',
        paddingVertical: 4
        
        
    },

    code: {
        borderWidth: 1, 
        width: '19%',
        backgroundColor: 'white', 
        borderRadius: 15, 
        borderColor: 'white', 
        marginBottom: 16, 
        
        },

    num:{
        borderWidth: 1, 
        width: '80%',
        backgroundColor: 'white', 
        borderRadius: 22, 
        borderColor: 'white', 
        marginBottom: 16, 
        padding: 4,
        paddingLeft: 19,  
    },

    button: {
        borderWidth: 1, 
        backgroundColor: 'white', 
        borderRadius: 22, 
        borderColor: '#ff38fa', 
        marginBottom: 10, 
        padding: 8,
        backgroundColor: '#ff38fa',
        elevation: 5,
        
    }

})
