import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import React from "react"
import { connect } from 'react-redux';
import { changeEmail } from '../../actions/AuthActions';
import { TextInput } from 'react-native-gesture-handler';

export function TabOneScreen({ email, password, changeEmail }) {
  return (
    <View style={styles.container}>
      <TextInput value={email} style={styles.input} onChangeText={(v) => changeEmail(v)} />
      <TextInput value={password} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 8
  },
  input: {
    padding: 10,
    backgroundColor: "#eee",
    width: "100%"
  }
});


const mapStateToProps = (state) => {

  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

const LoginConnect = connect(mapStateToProps, { changeEmail })(TabOneScreen)

export default LoginConnect
