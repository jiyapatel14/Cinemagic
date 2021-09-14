import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';
import { useValidation } from 'react-native-form-validator';
import DatePicker from 'react-native-datepicker';

const Profile = () => {

  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () =>  {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  renderInner = () =>  (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  
  bs = React.createRef();
  fall = new Animated.Value(1);
  
    const [birthdate, setBirthdate] = useState(new Date())
    // const [name, setName] = useState('Jiya Patel');
    // const [email, setEmail] = useState('jiya@gmail.com');
    // const [number, setNumber] = useState('1234567890');
  
    // const { validate, getErrorMessages } =
    //   useValidation({
    //     state: { name, email, number},
    //   });
  
    // const _onPressButton = () => {
    //   validate({
    //     name: { minlength: 3, maxlength: 7, required: true },
    //     email: { email: true },
    //     number: { numbers: true, minlength: 10 },
    //   });
    // };

    const [data, setData] = React.useState({
      name: '',
      email: '',
      phone: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidName: true,
      isValidEmail: true,
      isValidPhone: true,
  });
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            name: val,
            check_textInputChange: true,
            isValidName: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidName: false
        });
    }
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
const handlePhoneChange = (val) => {
  if( val.trim().length == 10 ) {
      setData({
          ...data,
          phone: val,
          isValidPhone: true
      });
  } else {
      setData({
          ...data,
          phone: val,
          isValidPhone: false
      });
  }
}
const handleValidName = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidName: true
        });
    } else {
        setData({
            ...data,
            isValidName: false
        });
    }
}

  return (
    <>
    <View style={styles.container}>
       <StatusBar backgroundColor='#FFDAB9' barStyle="dark-content"/>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#000000"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#000000',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{color:'#000000', marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Jiya Patel
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#000000" size={20} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:"#000000",
              },
            ]}
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidName(e.nativeEvent.text)}
        />
    </View>
    { data.isValidName ? null : 
    <Animatable.View animation="fadeInLeft" duration={500}>
    <Text style={styles.errorMsg}>Name must be 5 characters long.</Text>
    </Animatable.View>
    }

        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#000000" size={20} />
          <TextInput
            
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:"#000000",
              },
            ]}
            onChangeText={(val) => handleEmailChange(val)}
            />

        </View>
        { data.isValidEmail ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Email must be 8 characters long.</Text>
        </Animatable.View>
        }
        <View style={styles.action}>
          <FontAwesome name="birthday-cake" color="#000000" size={20} />
          < TextInput style={{
            color:"#000000"
          }
          }/>
          <DatePicker
        style={{width: 200}}
        date={birthdate}
        onDateChange={setBirthdate} 
        dateText={{color: '#fff'}}
        textColor="white"
        mode="date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2021-09-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      />
             
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#000000" size={20} />
          <TextInput
            
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:"#000000",
              },
            ]}
            onChangeText={(val) => handlePhoneChange(val)}
        />
    </View>
    { data.isValidPhone ? null : 
    <Animatable.View animation="fadeInLeft" duration={500}>
    <Text style={styles.errorMsg}>Phone No. must be of 10 numbers</Text>
    </Animatable.View>
    }
        <TouchableOpacity style={styles.commandButton} >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        {/* <Text>{getErrorMessages()}</Text> */}
      </Animated.View>
    </View>
    </>
  );
  
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFDAB9',
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#000000',
    shadowColor: '#FFDAB9',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFDAB9',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color: '#FFDAB9',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color:"#fff",
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FA8072',
    fontSize: 14,
},
});