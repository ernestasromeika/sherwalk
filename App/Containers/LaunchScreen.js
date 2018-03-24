import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, TouchableHighlight } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    letsGoPress = () => {
      navigate('MainMenuScreen', { name: 'Jane' })
    }

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={{ flex: 1 }}>
          <View style={[styles.centered, { flex: 2, justifyContent: 'center', alignItems: 'center' }]}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={[styles.centered, { flex: 1, justifyContent: 'center', alignItems: 'center' }]} >
            <Image source={Images.ready} />
          </View>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <TouchableHighlight onPress={letsGoPress}>
                <Text style={{ backgroundColor: 'white', color: "#f36c32", justifyContent: 'center', fontSize: 20, fontWeight: 'bold', borderRadius: 20, padding: 10, paddingLeft: 90, paddingRight: 90 }}>
                  LETS GO
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
