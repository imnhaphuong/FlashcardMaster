import React, { useState, useEffect } from "react";
import InsigniaCard from "../../components/Insignia";
import getALLInsignia from "../../../getdata/getAllInsignia";
import Back from "../../../assets/images/header/back.svg";
import colors from '../../../contains/colors'
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Alert
} from "react-native";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { buyInsignia } from "../../../getdata/getBuyInsignia";
import { setUser } from "../../store/slices/userSlice";


const Shop_Screen = (props) => {
    const dispatch = useDispatch()
    const [INSIGNIA, setInsignia] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { user } = useSelector(state => state.user);
    const [errorMessage, setErrorMessage] = useState();
    useEffect(() => {
        getALLInsignia(setInsignia, setLoading);
    }, [isLoading]);

    const myRenderInsigniaItem = ({ item }) => (
        <InsigniaCard
            disable={user.insignia.includes(item._id)}
            insignia={item}
            onClickItem={(insignia) => {
                console.log("HUY HIEU", insignia);
                Alert.alert(
                    "",
                    "Mua huy hiệu... với giá " + insignia.price + " xu",
                    [
                        {
                            text: "Huỷ",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: "Mua",
                            onPress: async () => {
                                const buy = await buyInsignia(user._id, insignia._id)
                                console.log("BUY", buy);
                                if (buy.status === "ERROR") {
                                    setErrorMessage("Rất tiếc bạn không đủ xu.")
                                } else {
                                    console.log("Mua thanh cong");
                                    dispatch(setUser(
                                        buy
                                    ))
                                }
                            }
                        }
                    ]
                );
            }}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            <View
                style={styles.header}
            ><TouchableOpacity onPress={() => {
                props.navigation.goBack()
            }}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Cửa hàng</Text>
            </View>
            {errorMessage && <Text style={{ color: "#DD0000", fontSize: 20 }}>{errorMessage}</Text>}
            <View style={styles.wrapInsigniases}>
                <FlatList
                    data={INSIGNIA}
                    renderItem={myRenderInsigniaItem}
                    numColumns={1}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    );
};
export default Shop_Screen;
