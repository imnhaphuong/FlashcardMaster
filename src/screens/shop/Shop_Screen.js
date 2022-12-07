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
    KeyboardAvoidingView,
    StatusBar,
    TouchableOpacity
} from "react-native";
import styles from "./style";

const Shop_Screen = (props) => {
    const [INSIGNIA, setInsignia] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getALLInsignia(setInsignia, setLoading);
    }, [isLoading]);

    const myRenderInsigniaItem = ({ item }) => (
        <>
            <InsigniaCard
                name={item.name}
                price={item.price}
                image={item.image}
            />
        </>
    );
    return (
        <SafeAreaView>
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