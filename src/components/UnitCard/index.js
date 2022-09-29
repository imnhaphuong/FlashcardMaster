import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

export class UnitCard extends Component {
  render() {
    return (
      <View style={styles.wrapUnitCard}>
        <Text style={styles.unitName}>Unit 1</Text>
        <Text style={styles.numberOfCards}>12 thẻ</Text>
        <View style={styles.wrapUser}>
         <Image style={styles.avatar} source={require('../../../assets/images/avt-default.png')} />
          <Text style={styles.username}>user012453</Text>
        </View>
      </View>
    )
  }
}

export default UnitCard