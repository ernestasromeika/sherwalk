import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Button } from 'react-native'
import { connect } from 'react-redux'
import GoogleFit from 'react-native-google-fit';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainMenuScreenStyle'

class MainMenuScreen extends Component {
  render () {
    
    authorizePress = () => {
      GoogleFit.authorize();
       
      GoogleFit.getDailyStepCountSamples(options, (err, res) => {
        if (err) {
          throw err;
        }
      
        console.log("Daily steps >>>", res);
      });

    }

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View>
            <Button title="Authorize" onPress={authorizePress}/>
          </View>
          <Text>MainMenuScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

GoogleFit.onAuthorize(() => {
  console.log('AUTH SUCCESS');

  GoogleFit.startRecording((callback) => {
    console.log(data,callback);
    // Process data from Google Fit Recording API (no google fit app needed)
  });
});
 
GoogleFit.onAuthorizeFailure((f) => {
  console.log('AUTH ERROR', f);
});

const options = {
  startDate: "2017-01-01T00:00:17.971Z", // required ISO8601Timestamp
  endDate: new Date().toISOString() // required ISO8601Timestamp
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreen)
