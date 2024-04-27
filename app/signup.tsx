import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';

const Page = () => {

  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNum, setPhoneNum] = useState('');
  const router = useRouter();

  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior='padding'
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone no. We will send you a confirmation code there
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholderTextColor={Colors.gray}
          value={countryCode}
          />

          <TextInput
          style={[styles.input, {flex: 1}]}
          placeholder='Mobile Number'
          placeholderTextColor={Colors.gray}
          keyboardType='numeric'
          value={phoneNum}
          onChangeText={setPhoneNum}
          />
        </View>

        <Link href={'/login'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? 
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{flex:1 }}/>

        <TouchableOpacity style={[ 
          defaultStyles.pillButton,
          phoneNum !== "" ? styles.enabled : styles.disabled,
          {marginBottom: 10},
        ]}>
          <Text>Sign up</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled:{
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  }
})

export default Page;