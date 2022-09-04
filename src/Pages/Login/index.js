import {View, StyleSheet} from 'react-native';
import React , {useState} from 'react';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import {colors, dimensions} from '../../Theme';
const Login = () => {
  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = () =>{
    setErrors({})
    let error = {}
    if(!userName){
      error["userName"] = "please enter User Name"
    }
    if(!password){
      error["password"] = "please enter your Password"
    }
    setErrors(error)
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log("successssssssssssssssss")
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputField
          placeholder="enter you name"
          onChangeText={e => setUserName(e)}
          error={errors.userName}
          onFocus={()=>setErrors({...errors , userName:null})}
        />
        <InputField
          placeholder="enter password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
          error={errors.password}
          onFocus={()=>setErrors({...errors , password:null})}
        />
        <Button text="Login..." onPress={login} containerStyle={{marginTop:20}} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  form: {
    alignItems: 'center',
    width: '100%',
  },
});
