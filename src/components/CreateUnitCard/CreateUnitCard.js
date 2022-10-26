import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInputUnit from '../CustomInputUnit/CustomInputUnit'
import CustomButton from '../../components/CustomButton/CustomButton';
const CreateUnitCard = ({handleSubmit}) => {
    const term = 'Thuật ngữ'
    const defi = 'Định nghĩa'
    const example = 'Ví dụ'
  return (
    <View style={styles.formCard}>
      <CustomInputUnit label={term}/>
      <CustomInputUnit label={defi}/>
      <CustomInputUnit label={example}/>
      <CustomButton type="ADD" text="Tải ảnh lên" onPress={handleSubmit} hide="hide" />
    </View>
  )
}

export default CreateUnitCard