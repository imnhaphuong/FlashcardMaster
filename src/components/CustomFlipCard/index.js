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
import * as Speech from "expo-speech";

export default class CustomFlipCard extends Component {
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
      <View style={styles.container}>
        <FlipCard
          flipDirection={"v"}
          style={styles.cardContainer}
          ref={(card) => (this.card = card)}
          onFlipStart={() => console.log("onFlipStart")}
          onFlipEnd={() => console.log("onFlipEnd")}
        >
          {/* FACE */}
          <Pressable
            style={styles.card}
            onPress={() => this.card.flipVertical()}
          >
            <Text style={styles.label}>{this.state.term}</Text>
            <Pressable
              style={styles.listenButton}
              onPress={() => {
                this.setState({ activeListen: !this.state.activeListen });
              }}
            >
              <Pressable
                style={styles.listenButton}
                onPress={() => {
                  this.onSpeak(this.state.term);
                }}
              >
                {this.state.activeListen ? <ActiveListen /> : <Listen />}
              </Pressable>
            </Pressable>
            <Image style={styles.img} source={{ uri: this.state.image }} />
          </Pressable>
          {/* BACK */}
          <Pressable
            style={styles.card}
            onPress={() => this.card.flipVertical()}
          >
            <Text style={styles.label}>{this.state.define} </Text>
            <Text style={styles.example}>{this.state.example}</Text>
          </Pressable>
        </FlipCard>
      </View>
    );
  }
}
