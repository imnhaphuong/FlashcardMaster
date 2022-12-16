import { View, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState, useReducer } from 'react'
import colors from '../../../contains/colors'
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import { SafeAreaView } from 'react-native-safe-area-context'
import { FieldArray, Formik, getIn } from 'formik';
import CustomInputUnit from '../../components/CustomInputUnit/CustomInputUnit';
import Add from "../../../assets/images/checkbox/add.svg";
import { UnitSchema } from '../../../contains/validation'
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import SysModal from '../../components/SysModal/SysModal';
// import ImagePicker from 'react-native-image-picker'
// import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'
import { Checkbox, Provider } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import fonts from '../../../contains/fonts';
import getTopic from "./getTopic";
import getUnitById from "../../../getdata/getUnitById";
const CreateUnitScreen = (props) => {
  var params = props.route.params;
  const label = 'Tên học phần';
  const term = 'Thuật ngữ'
  const defi = 'Định nghĩa'
  const example = 'Ví dụ'
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [fullname, setFullname] = useState("")
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [flashcards, setFlashcards] = useState([]);
  const [unit, setUnit] = useState("")
  const [create, setCreate] = useState(true)
  const [initialValue, setInitialValue] = useState({
    unitName: "",
    flashcards: [{
      _id: "",
      term: "",
      define: "",
      example: "",
      image: "",
    }],
    topic: "",
    mode: false,
  })

  const url = "https://flashcard-master.vercel.app/api/units"
  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(result => {
      const { fullname, _id } = JSON.parse(result)
      setFullname(fullname);
      setUserId(_id);
    })
    getTopic(items, setItems)
    if (params !== undefined) {
      setLoading(true)
      setCreate(false)
      getUnitById(params.id, setUnit, setLoading);

      if (typeof unit.flashcards !== 'undefined') {
        setLoad(false)
        // setValue(unit.topic)
      }
    }
  }, [load])
  const showModa = () => {
    setTimeout(() => {
      setShowModal(false);
      setLoading(false);
    }, 2000);
  };
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,

    },
  }
  //Kiem tra dung luong file
  const getFileInfo = async (fileURI) => {
    const fileInfo = await FileSystem.getInfoAsync(fileURI)
    return fileInfo
  }
  const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
    const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB
    return isOk
  }
  const onUploadImage = async (i) => {
    console.log("onUploadImage");
    setLoading(true)
    // const image = await launchImageLibrary(options);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });
    const { uri, type } = result
    const file = { uri, type }

    if (result.cancelled) return setLoading(false)

    if (!result.cancelled) {
      const fileInfo = await getFileInfo(uri)
      //Kiểm tra kích thước file
      if (!fileInfo.size) {
        setMess("Không thể chọn hình ảnh với kích thước không phù hợp")
        setShowModal(true)
        showModa();
        return
      }
      if (type === 'image') {
        const isLt3MB = isLessThanTheMB(fileInfo.size, 3)
        if (!isLt3MB) {
          setMess("Hình ảnh phải có kích thước bé hơn 3MB!")
          setShowModal(true)
          showModa();
          return
        }
      }

      //Upload imgage to cloudinary
      let base64Img = `data:image/jpg;base64,${result.base64}`
      let data = {
        "file": base64Img,
        "upload_preset": "_FlashcardMaster"
      }
      await fetch('https://api.cloudinary.com/v1_1/flashcardmaster/image/upload', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(res => res.json())
        .then(data => {
          showModa();
          images[i] = data.url;
          setImages([...images])
        }).catch(err => {
          setMess(err)
          setShowModal(true)

        })

    }

  };
  const onDeleteImage = (i, values) => {
    console.log("onDelete");
    if (unit !== "") {

      console.log("fds", values.flashcards[i].image);
      values.flashcards[i].image = ""
      console.log("after", values.flashcards[i].image);
    }
    images[i] = undefined;
    setImages([...images])

  }
  let verif = true;
  const verified = (values, verif) => {
    setLoading(true)
    values.flashcards.map((item, index) => {
      if (item.define === "" && item.term === "" && item.example === "" && item.image === "") {
        if (flashcards.length > 1) {
          values.flashcards.splice(index, 1);
          setMess("Không được để trống ")
          setShowModal(true)
          showModa()
          return
        }
      } else if (item.define === "" || item.term === "" || (item.define === "" && item.term === "")) {
        setMess("Không được để trống Thuật ngữ hoặc Định nghĩa")
        setShowModal(true)
        showModa()
        verif = false;
        return
      }
    })
  }
  const createUnit = async (values) => {

    verified(values, verif)
    if (verif === true) {
      const data = {
        unitName: values.unitName,
        userId: "636229a664e39686c4afa67f",
        fullname: "FlashcardMaster",
        flashcards: values.flashcards,
        mode: values.mode,
        topic: values.topic
      }
      console.log("data", data);
      try {
        const result = await fetch(`${url}/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(data),
        }).then(res => res.json()
        )
        console.log(result);
        if (result.status === 'error') {
          setMess(result.error)
          setShowModal(true);
          showModa();
          return
        }
        setLoading(false)
        setTimeout(() => {
          props.navigation.replace("unit_detail", {
            id: result._id,
          })
        }, 1000)
      } catch (error) {
        setMess(error.message)
        console.log(error);
        setShowModal(true);
        showModa();
      }
    }
  }
  const updateUnit = async (values) => {
    console.log("updateUnit", values);
    verified(values, verif)
    if (verif) {
      try {
        const data = {
          _id: params.id,
          unitName: values.unitName,
          flashcards: values.flashcards,
          mode: values.mode,
          topic: values.topic
        }
        console.log("result", data);
        const result = await fetch(`${url}/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }).then(res => res.json()
        )

        setLoading(false)
        setTimeout(() => {
          props.navigation.replace("unit_detail", {
            id: params.id,
          })
        }, 1000)
      } catch (error) {
        setMess(error.message)
        console.log(error);
        setShowModal(true);
        showModa();
      }
    }
  }
  return (

    <Formik
      enableReinitialize
      style={styles.form}
      initialValues={unit === "" ? initialValue : unit}
      onSubmit={(values) => { params === undefined ? createUnit(values) : updateUnit(values) }}
      validationSchema={UnitSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <>
          <Spinner color={colors.violet} visible={isLoading} />
          <SysModal visible={showModal} message={mess} />
          <FieldArray
            name='flashcards'
          >
            {({ push }) => (
              <SafeAreaView style={styles.container}>
                <StatusBar
                  animated={true}
                  backgroundColor={colors.white}
                  barStyle={"dark-content"}
                  showHideTransition={"fade"}
                />
                {/* Header */}
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={styles.header}
                >
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                  >
                    <Back />
                  </TouchableOpacity>
                  <Text style={styles.textHeader}>{params !== undefined ? "Sửa học phần" : "Tạo học phần"}</Text>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Check />
                  </TouchableOpacity>
                </KeyboardAvoidingView>
                <ScrollView style={{ flex: 1 }} >
                  <View style={styles.content}>
                    <CustomInputUnit onChangeText={handleChange('unitName')}
                      onBlur={handleBlur('unitName')} value={values.unitName} errors={errors.unitName} touched={touched.unitName} label={label} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Checkbox
                        status={values.mode === true ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setFieldValue("mode", !values.mode);
                        }}
                        uncheckedColor={colors.violet}
                        color={colors.violet}
                      />
                      <Text style={styles.text}>Công khai học phần</Text>
                    </View>
                    {
                      items.map((item, i) => {
                        if (unit.topic === item.value) {
                          setValue(item);
                        }
                      })
                    }
                    <DropDownPicker
                      placeholder={values.topic === "" ? "Chọn chủ đề" : value.label}
                      open={open}
                      value={values.topic = value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      stickyHeader={true}
                      searchable={true}
                      listMode="SCROLLVIEW"
                      // multiple={true}
                      // mode="BADGE"
                      // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                      autoScroll={true}
                      searchPlaceholderTextColor={colors.text}
                      searchPlaceholder="Tìm kiếm"
                      style={{
                        marginTop: 10,
                        borderColor: colors.violet,
                        backgroundColor: colors.white,
                        borderWidth: 1,
                      }}
                      searchTextInputStyle={{
                        fontFamily: fonts.regular,
                        backgroundColor: colors.yellow,
                        borderColor: colors.yellow,

                      }}
                      searchContainerStyle={{
                        borderBottomColor: colors.graySecondary
                      }}
                      dropDownContainerStyle={{
                        borderWidth: 1,
                        borderColor: colors.violet,
                        borderTopColor: colors.graySecondary,
                      }}
                      tickIconStyle={{
                        width: 20,
                        height: 20,
                        backgroundColor: colors.yellow,
                      }}
                      textStyle={{
                        fontSize: 16,
                        fontFamily: fonts.regular,
                        color: colors.violet,
                      }}
                      placeholderStyle={{
                        color: colors.text,
                        fontFamily: fonts.regular
                      }}
                    />
                    <View style={styles.createCard}>
                      {
                        values.flashcards.map((item, i) => {
                          const id = `flashcards[${i}]._id`
                          const te = `flashcards[${i}].term`
                          const errTerm = getIn(errors, te);
                          const de = `flashcards[${i}].define`
                          const errDefine = getIn(errors, de);
                          const ex = `flashcards[${i}].example`
                          const errExample = getIn(i, ex);
                          const im = `flashcards[${i}].image`
                          return (
                            <View key={i} style={styles.formCard}>
                              {
                                values.flashcards[i]._id !== undefined ? <TextInput style={{ width: 0, height: 0 }} value={values.flashcards[i]._id} name={id} /> : <TextInput style={{ width: 0, height: 0 }} value={values.flashcards[i]._id = ""} name={id} />
                              }

                              <CustomInputUnit name={te} onChangeText={handleChange(te)
                              } value={values.flashcards[i].term}
                                onBlur={handleBlur(te)} errors={errTerm} touched={item.term} label={term} />
                              <CustomInputUnit name={de} onChangeText={handleChange(de)} value={values.flashcards[i].define}
                                onBlur={handleBlur(de)} errors={errDefine} touched={item.define} label={defi} />
                              <CustomInputUnit name={ex} onChangeText={handleChange(ex)} value={values.flashcards[i].example}
                                onBlur={handleBlur(ex)} errors={errExample} touched={item.example} label={example} />
                              <TextInput style={{ width: 0, height: 0 }} value={images[i] === undefined ? values.flashcards[i].image : values.flashcards[i].image = images[i]} name={im} />

                              {images[i] !== undefined || (images[i] !== undefined && values.flashcards[i].image !== "") || values.flashcards[0].image !== "" ?
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                  <Image
                                    style={{ height: 100, width: 100, marginRight: 20 }}
                                    source={{ uri: (images[i] == undefined ? values.flashcards[i].image : images[i] = values.flashcards[i].image) }} />
                                  <View style={{}}>
                                    <CustomButton name={im} type="CHANGE_IMAGE" text="Thay đổi" onPress={() =>
                                      onUploadImage(i)
                                    } hide="hide" />
                                    <CustomButton type="DE_IMAGE" text="Xóa" onPress={() => onDeleteImage(i, values)} hide="hide" />
                                  </View>
                                </View>
                                : <CustomButton name={im} type="ADD" text="Tải ảnh lên" onPress={() =>
                                  onUploadImage(i)
                                } hide="hide" />}
                            </View>
                          )
                        })
                      }
                    </View>
                  </View>
                </ScrollView>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    if (values.flashcards.length > 49) {
                      setMess("Một học phần không thể tạo quá 50 thẻ")
                      setShowModal(true)
                      showModa()
                    }
                    push({
                      // id: uuid.v4(), 
                      term: "",
                      define: "",
                      example: "",
                      image: undefined,
                    })
                  }}
                  style={styles.add}
                >
                  <View style={styles.addIcon}>
                    <Add />
                  </View>
                </TouchableOpacity>
              </SafeAreaView>
            )}
          </FieldArray>
        </>
      )}
    </Formik>


  )
}
export default CreateUnitScreen