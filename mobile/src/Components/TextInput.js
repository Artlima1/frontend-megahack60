import React, { useEffect, useState } from "react";
import {
  TextInput as _TextInput,
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TextInput = React.forwardRef((props, ref) => {
  const styles = getStyles();
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState(props.value);
  const [focusAnimated] = useState(new Animated.Value(0));
  const [labelText, setLabelText] = useState("");
  const [error, setError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState();

  useEffect(() => {
    if (props.label && labelText !== props.label) setLabelText(props.label);
  }, [props.label, labelText]);

  useEffect(() => {
    setError(props.error);
  }, [props.error]);

  useEffect(() => {
    if (props.secureTextEntry === true) setPasswordVisible(true);
    else setPasswordVisible();
  }, [props.secureTextEntry]);

  const textInputStyle = [styles.textInput];
  if (typeof passwordVisible !== "undefined")
    textInputStyle.push(styles.textInputPass);

  if (error) textInputStyle.push(styles.textInputError);
  textInputStyle.push(props.textInputStyle);

  let labelStyle = { display: "none" };
  if (labelText) {
    let labelActive = isFocused || content;

    Animated.timing(focusAnimated, {
      toValue: labelActive ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    labelStyle = {
      color: "#F4AA1D",
      position: "absolute",
      left: 4,
      top: focusAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [styles.textInput.paddingTop - 8, 0],
      }),
      fontSize: focusAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14],
      }),
      zIndex: 3,
      // color: focusAnimated.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [colors.text, colors.text],
      // }),
    };
  }

  function handleFocus(e) {
    if (props.onFocus) props.onFocus(e);

    setIsFocused(true);
  }

  function handleBlur(e) {
    if (props.onBlur) props.onBlur(e);

    setIsFocused(false);
  }

  function handleOnChangeText(text) {
    if (props.onChangeText) props.onChangeText(text);
    setContent(text);
  }

  function handlePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  function getTextInputSecureTextEntry() {
    if (typeof passwordVisible !== "undefined") return passwordVisible;
    return false;
  }

  function getIconName() {
    return passwordVisible ? "eye" : "eye-off";
  }

  return (
    <View style={props.style}>
      <Animated.Text style={labelStyle}>{labelText}</Animated.Text>
      <_TextInput
        placeholderTextColor={"#F4AA1D"}
        {...props}
        style={textInputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={content}
        ref={ref}
        onChangeText={handleOnChangeText}
        secureTextEntry={getTextInputSecureTextEntry()}
      />
      {typeof passwordVisible !== "undefined" && (
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          style={styles.icon}
        >
          <MaterialCommunityIcons
            name={getIconName()}
            size={24}
            color={
              props.placeholderTextColor
                ? props.placeholderTextColor
                : "#F4AA1D"
            }
          />
        </TouchableOpacity>
      )}
      {error && props.errorMessage && (
        <Text style={[styles.textError, props.errorMessageStyle]}>
          {props.errorMessage}
        </Text>
      )}
    </View>
  );
});

export default TextInput;

function getStyles() {
  return StyleSheet.create({
    textInput: {
      paddingTop: 20,
      fontSize: 16,
      borderColor: "#F4AA1D",
      borderWidth: 1,
      borderRadius: 8,
      paddingBottom: 6,
      color: "#fff",
      backgroundColor: "#000000aa",
      padding: 10,
    },
    icon: {
      position: "absolute",
      right: 8,
      top: 12,
    },
    textError: {
      color: "red",
    },
    textInputError: {
      borderColor: "red",
    },
    textInputPass: {
      paddingRight: 30,
    },
  });
}
