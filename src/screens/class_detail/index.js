import { Text, View, StatusBar} from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import UnitCard from '../../components/unit-card'

export class ClassDetailScreen extends Component {
  render() {
    return (
      <View style={styles.titleBar}>
          <UnitCard/>
      </View>
    )
  }
}

export default ClassDetailScreen