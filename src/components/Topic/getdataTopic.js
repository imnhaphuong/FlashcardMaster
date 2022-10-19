//import { useState } from "react";

const getDataTopic = async (setdata) => {
    fetch("http://192.168.1.89:3000/api/topics", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept":  "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        //console.log(resJson)
        setdata(resJson)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  module.exports = getDataTopic;