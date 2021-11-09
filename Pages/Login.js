import React, {useContext, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';
import SocialButton from '../components/SocialButton';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login, googleLogin} = useContext(AuthContext);

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
    });
 
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleEmailChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                email: val,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                isValidEmail: false
            });
        }
    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FFDAB9' barStyle="dark-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Email ID</Text>
            <View style={styles.action}>
                <MaterialIcons 
                    name="email"
                    color="#666666"
                    size={20}
                />
                <TextInput
                    placeholder="Your email address"
                    keyboardType="email-address"
                    style={styles.textInput}
                    autoCapitalize="none"
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
            />

        </View>
        { data.isValidEmail ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Email must be 8 characters long.</Text>
        </Animatable.View>
        }

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#666666"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword) }
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="#A9A9A9"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="#FFDAB9"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#FF7F50', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.login}
                    onPress={() =>  login(email, password)}
                >
                <LinearGradient
                    colors={['#FFDAB9', '#FFDAB9']}
                    style={styles.login}
                >
                    <Text style={[styles.textSign, {
                        color:'#000000'
                    }]}>Login</Text>
                </LinearGradient>
                </TouchableOpacity>
     
                <SocialButton 
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#FFDAB9"
                    onPress={() => googleLogin()}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.login, {
                        borderColor: '#000000',
                        borderWidth: 1,
                        marginTop: 15,
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#FFDAB9'
                    }]}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFDAB9'
    },
    header: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 20,
        paddingBottom: 1,
    },
    footer: {
        flex: 3,
        backgroundColor: '#000000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: 'white',
        fontSize: 18,
        paddingTop:15,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'white',
    },
    errorMsg: {
        color: '#FA8072',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorLabelContainerStyle: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
      },

      errorTextStyle: {
        color: "red",
        textAlign: "center"
      },
  });