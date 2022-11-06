import React, { Component, useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FlipCard from "react-native-flip-card-plus";
import styles from "./style";
import Listen from "../../../assets/images/flashcard/inactive_listen.svg";
import ActiveListen from "../../../assets/images/flashcard/active_listen.svg";

export default class CustomFlipCard extends Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
    this.state = {
      activeListen: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlipCard
          flipDirection={"h"}
          style={styles.cardContainer}
          ref={(card) => (this.card = card)}
          onFlipStart={() => console.log("onFlipStart")}
          onFlipEnd={() => console.log("onFlipEnd")}
        >
          {/* FACE */}
          <Pressable
            style={styles.card}
            onPress={() => this.card.flipHorizontal()}
          >
            <Text style={styles.label}>Carrot</Text>
            <Pressable
              style={styles.listenButton}
              onPress={() => {
                this.setState({ activeListen: !this.state.activeListen });
              }}
            >
              {this.state.activeListen ? <ActiveListen /> : <Listen />}
            </Pressable>
            <Image
              style={styles.img}
              source={require("../../../assets/images/flashcard/carrots.jpg")}
            />
          </Pressable>

          {/* BACK */}
          <Pressable
            style={styles.card}
            onPress={() => this.card.flipHorizontal()}
          >
            <Text style={styles.label}>Cà rốt</Text>
            <Text style={styles.example}>Ex: I fond of carrot</Text>
          </Pressable>
        </FlipCard>
      </View>
    );
  }
}
