import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInputUnit from '../CustomInputUnit/CustomInputUnit'
import CustomButton from '../../components/CustomButton/CustomButton';
import { Formik } from 'formik'
const CreateUnitCard = ({onPress, fcards,}) => {
    const term = 'Thuật ngữ'
    const defi = 'Định nghĩa'
    const example = 'Ví dụ'
  return (
    
    <View style={styles.formCard}>
     
      <CustomInputUnit onChangeText={handleChange('term')}
                  onBlur={handleBlur('term')} value={values.term} errors={errors.term} touched={touched.term} label={term}/>
      <CustomInputUnit onChangeText={handleChange('define')}
                  onBlur={handleBlur('define')} value={values.define} errors={errors.define} touched={touched.define} label={defi}/>
      <CustomInputUnit onChangeText={handleChange('example')}
                  onBlur={handleBlur('example')} value={values.example} errors={errors.example} touched={touched.example} label={example}/>
      <CustomButton type="ADD" text="Tải ảnh lên" onPress={onPress} hide="hide" />

    </View>
  )
}

export default CreateUnitCard