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
import styles from "./style";
import Listen from "../../../assets/images/flashcard/inactive_listen.svg";
import ActiveListen from "../../../assets/images/flashcard/active_listen.svg";
import * as Speech from "expo-speech";

export default class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
    this.state = {
      activeListen: false,
      term: props.term,
      define: props.define,
      example: props.example,
      image: props.image,
    };
  }
  onSpeak(thingToSay) {
    Speech.stop();
    Speech.speak(thingToSay, {
      language: "en",
      onStart: () => {
        this.setState({ activeListen: !this.state.activeListen });
      },
      onError: (err) => {
        console.log("khong tim thay file nghe", err);
      },
      onDone: () => {
        this.setState({ activeListen: false });
      },
    });
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.wrapText}>
          <Text style={styles.label}>{this.state.term}</Text>
          <Text style={styles.define}>{this.state.define}</Text>
          <Text style={styles.example}>{this.state.example}</Text>
        </View>
        <Pressable
          style={[
            styles.listenButton,
            this.state.activeListen ? styles.listenButtonActived : null,
          ]}
          onPress={() => {
            this.onSpeak(this.state.term);
          }}
        >
          {this.state.activeListen ? <ActiveListen /> : <Listen />}
        </Pressable>
        <Image style={styles.img} source={{ uri: this.state.image }} />
      </View>
    );
  }
}
