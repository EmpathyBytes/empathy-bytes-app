import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
//const windowWidth = Dimensions.get('window').width;

const BorderBox = (props) => {
    return (
        <View style={[styles.borderBox, {borderColor: props.borderColor}, props.style]}> 
            {/*if isCentered, center the text, else only apply absolute position and left: 20*/}
            <View style={props.isCentered ? {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'} : {position: 'absolute'}}>
              <Text style={[styles.text, {color: props.titleColor, backgroundColor: props.backgroundColor, left: props.isCentered ? 0 : 20}]}>
              {props.title}
              </Text>
            </View>
            {props.children}
        </View>
    );
}

export default BorderBox;

const styles = StyleSheet.create({
  borderBox: {
    borderWidth: 1.5,
    borderRadius: 35,
    width: 'inherit',
    margin: 5,
  },
  text: {
    //position: 'absolute',
    //textAlign: 'center',
    fontSize: 30,
    fontFamily: "Lexend_700Bold",
    zIndex: 1,
    top: -27,
    paddingHorizontal: 5,
  },
})
