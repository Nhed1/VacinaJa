import { useState } from "react";
import { TextInput } from "react-native";

export function Input({ accessibilityLabel = "", placeholder = "" }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={{
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 12,
        paddingVertical: 15,
        marginTop: 20,
        borderColor: isFocused ? "#38BDF8" : "gray",
      }}
      keyboardType="decimal-pad"
      placeholder={placeholder}
      secureTextEntry={true}
      placeholderTextColor="black"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
